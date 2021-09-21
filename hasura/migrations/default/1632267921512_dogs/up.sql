SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.dog (
    id integer NOT NULL,
    name text NOT NULL,
    dog_status text NOT NULL,
    gender text NOT NULL,
    weight integer,
    breed text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    birthdate timestamp without time zone,
    deleted_at timestamp with time zone
);
CREATE SEQUENCE public.dogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.dogs_id_seq OWNED BY public.dog.id;
CREATE TABLE public.status (
    id text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.walk (
    id integer NOT NULL,
    pooped boolean NOT NULL,
    peed boolean NOT NULL,
    medical_concern text,
    jumps integer NOT NULL,
    jump_handlage text,
    dogs_seen_reacted integer NOT NULL,
    seen_dogs_reaction text,
    dogs_seen integer NOT NULL,
    other_concerns text NOT NULL,
    walker_id integer NOT NULL,
    dog_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.walk_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.walk_id_seq OWNED BY public.walk.id;
ALTER TABLE ONLY public.dog ALTER COLUMN id SET DEFAULT nextval('public.dogs_id_seq'::regclass);
ALTER TABLE ONLY public.walk ALTER COLUMN id SET DEFAULT nextval('public.walk_id_seq'::regclass);
ALTER TABLE ONLY public.dog
    ADD CONSTRAINT dogs_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.walk
    ADD CONSTRAINT walk_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_dogs_updated_at BEFORE UPDATE ON public.dog FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_dogs_updated_at ON public.dog IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_walk_updated_at BEFORE UPDATE ON public.walk FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_walk_updated_at ON public.walk IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.walk
    ADD CONSTRAINT walk_dog_id_fkey FOREIGN KEY (dog_id) REFERENCES public.dog(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.walk
    ADD CONSTRAINT walk_walker_id_fkey FOREIGN KEY (walker_id) REFERENCES auth.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
