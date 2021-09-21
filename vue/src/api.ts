import { gql } from '@urql/vue';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String'];
};

export type RegisterArgs = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResult = {
  __typename?: 'RegisterResult';
  token: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "auth.role" */
export type Auth_Role = {
  __typename?: 'auth_role';
  comment: Scalars['String'];
  id: Scalars['String'];
};

/** aggregated selection of "auth.role" */
export type Auth_Role_Aggregate = {
  __typename?: 'auth_role_aggregate';
  aggregate?: Maybe<Auth_Role_Aggregate_Fields>;
  nodes: Array<Auth_Role>;
};

/** aggregate fields of "auth.role" */
export type Auth_Role_Aggregate_Fields = {
  __typename?: 'auth_role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Role_Max_Fields>;
  min?: Maybe<Auth_Role_Min_Fields>;
};


/** aggregate fields of "auth.role" */
export type Auth_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.role". All fields are combined with a logical 'AND'. */
export type Auth_Role_Bool_Exp = {
  _and?: Maybe<Array<Auth_Role_Bool_Exp>>;
  _not?: Maybe<Auth_Role_Bool_Exp>;
  _or?: Maybe<Array<Auth_Role_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.role" */
export enum Auth_Role_Constraint {
  /** unique or primary key constraint */
  RolePkey = 'role_pkey'
}

/** input type for inserting data into table "auth.role" */
export type Auth_Role_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Role_Max_Fields = {
  __typename?: 'auth_role_max_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Role_Min_Fields = {
  __typename?: 'auth_role_min_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.role" */
export type Auth_Role_Mutation_Response = {
  __typename?: 'auth_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Role>;
};

/** input type for inserting object relation for remote table "auth.role" */
export type Auth_Role_Obj_Rel_Insert_Input = {
  data: Auth_Role_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Role_On_Conflict>;
};

/** on conflict condition type for table "auth.role" */
export type Auth_Role_On_Conflict = {
  constraint: Auth_Role_Constraint;
  update_columns?: Array<Auth_Role_Update_Column>;
  where?: Maybe<Auth_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.role". */
export type Auth_Role_Order_By = {
  comment?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_role */
export type Auth_Role_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.role" */
export enum Auth_Role_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.role" */
export type Auth_Role_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.role" */
export enum Auth_Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "auth.users" */
export type Auth_Users = {
  __typename?: 'auth_users';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  encrypted_password: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  /** An object relationship */
  role?: Maybe<Auth_Role>;
  user_role: Scalars['String'];
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: Maybe<Array<Auth_Users_Bool_Exp>>;
  _not?: Maybe<Auth_Users_Bool_Exp>;
  _or?: Maybe<Array<Auth_Users_Bool_Exp>>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  encrypted_password?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Auth_Role_Bool_Exp>;
  user_role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersEncryptedPasswordKey = 'users_encrypted_password_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  role?: Maybe<Auth_Role_Obj_Rel_Insert_Input>;
  user_role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  user_role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  user_role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Auth_Users_Obj_Rel_Insert_Input = {
  data: Auth_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};

/** on conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  encrypted_password?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  role?: Maybe<Auth_Role_Order_By>;
  user_role?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UserRole = 'user_role'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  user_role?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UserRole = 'user_role'
}

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "dog" */
export type Dog = {
  __typename?: 'dog';
  birthdate?: Maybe<Scalars['timestamp']>;
  breed?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  dog_status: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  status?: Maybe<Status>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  walks: Array<Walk>;
  /** An aggregate relationship */
  walks_aggregate: Walk_Aggregate;
  weight?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "dog" */
export type DogWalksArgs = {
  distinct_on?: Maybe<Array<Walk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Walk_Order_By>>;
  where?: Maybe<Walk_Bool_Exp>;
};


/** columns and relationships of "dog" */
export type DogWalks_AggregateArgs = {
  distinct_on?: Maybe<Array<Walk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Walk_Order_By>>;
  where?: Maybe<Walk_Bool_Exp>;
};

/** aggregated selection of "dog" */
export type Dog_Aggregate = {
  __typename?: 'dog_aggregate';
  aggregate?: Maybe<Dog_Aggregate_Fields>;
  nodes: Array<Dog>;
};

/** aggregate fields of "dog" */
export type Dog_Aggregate_Fields = {
  __typename?: 'dog_aggregate_fields';
  avg?: Maybe<Dog_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Dog_Max_Fields>;
  min?: Maybe<Dog_Min_Fields>;
  stddev?: Maybe<Dog_Stddev_Fields>;
  stddev_pop?: Maybe<Dog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dog_Stddev_Samp_Fields>;
  sum?: Maybe<Dog_Sum_Fields>;
  var_pop?: Maybe<Dog_Var_Pop_Fields>;
  var_samp?: Maybe<Dog_Var_Samp_Fields>;
  variance?: Maybe<Dog_Variance_Fields>;
};


/** aggregate fields of "dog" */
export type Dog_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dog_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Dog_Avg_Fields = {
  __typename?: 'dog_avg_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "dog". All fields are combined with a logical 'AND'. */
export type Dog_Bool_Exp = {
  _and?: Maybe<Array<Dog_Bool_Exp>>;
  _not?: Maybe<Dog_Bool_Exp>;
  _or?: Maybe<Array<Dog_Bool_Exp>>;
  birthdate?: Maybe<Timestamp_Comparison_Exp>;
  breed?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  dog_status?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  status?: Maybe<Status_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  walks?: Maybe<Walk_Bool_Exp>;
  weight?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "dog" */
export enum Dog_Constraint {
  /** unique or primary key constraint */
  DogsPkey = 'dogs_pkey'
}

/** input type for incrementing numeric columns in table "dog" */
export type Dog_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "dog" */
export type Dog_Insert_Input = {
  birthdate?: Maybe<Scalars['timestamp']>;
  breed?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  dog_status?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  walks?: Maybe<Walk_Arr_Rel_Insert_Input>;
  weight?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Dog_Max_Fields = {
  __typename?: 'dog_max_fields';
  birthdate?: Maybe<Scalars['timestamp']>;
  breed?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  dog_status?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Dog_Min_Fields = {
  __typename?: 'dog_min_fields';
  birthdate?: Maybe<Scalars['timestamp']>;
  breed?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  dog_status?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "dog" */
export type Dog_Mutation_Response = {
  __typename?: 'dog_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Dog>;
};

/** input type for inserting object relation for remote table "dog" */
export type Dog_Obj_Rel_Insert_Input = {
  data: Dog_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Dog_On_Conflict>;
};

/** on conflict condition type for table "dog" */
export type Dog_On_Conflict = {
  constraint: Dog_Constraint;
  update_columns?: Array<Dog_Update_Column>;
  where?: Maybe<Dog_Bool_Exp>;
};

/** Ordering options when selecting data from "dog". */
export type Dog_Order_By = {
  birthdate?: Maybe<Order_By>;
  breed?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  dog_status?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Status_Order_By>;
  updated_at?: Maybe<Order_By>;
  walks_aggregate?: Maybe<Walk_Aggregate_Order_By>;
  weight?: Maybe<Order_By>;
};

/** primary key columns input for table: dog */
export type Dog_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "dog" */
export enum Dog_Select_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  Breed = 'breed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DogStatus = 'dog_status',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "dog" */
export type Dog_Set_Input = {
  birthdate?: Maybe<Scalars['timestamp']>;
  breed?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  dog_status?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Dog_Stddev_Fields = {
  __typename?: 'dog_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Dog_Stddev_Pop_Fields = {
  __typename?: 'dog_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Dog_Stddev_Samp_Fields = {
  __typename?: 'dog_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Dog_Sum_Fields = {
  __typename?: 'dog_sum_fields';
  id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** update columns of table "dog" */
export enum Dog_Update_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  Breed = 'breed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DogStatus = 'dog_status',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Dog_Var_Pop_Fields = {
  __typename?: 'dog_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Dog_Var_Samp_Fields = {
  __typename?: 'dog_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Dog_Variance_Fields = {
  __typename?: 'dog_variance_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.role" */
  delete_auth_role?: Maybe<Auth_Role_Mutation_Response>;
  /** delete single row from the table: "auth.role" */
  delete_auth_role_by_pk?: Maybe<Auth_Role>;
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "dog" */
  delete_dog?: Maybe<Dog_Mutation_Response>;
  /** delete single row from the table: "dog" */
  delete_dog_by_pk?: Maybe<Dog>;
  /** delete data from the table: "status" */
  delete_status?: Maybe<Status_Mutation_Response>;
  /** delete single row from the table: "status" */
  delete_status_by_pk?: Maybe<Status>;
  /** delete data from the table: "walk" */
  delete_walk?: Maybe<Walk_Mutation_Response>;
  /** delete single row from the table: "walk" */
  delete_walk_by_pk?: Maybe<Walk>;
  /** insert data into the table: "auth.role" */
  insert_auth_role?: Maybe<Auth_Role_Mutation_Response>;
  /** insert a single row into the table: "auth.role" */
  insert_auth_role_one?: Maybe<Auth_Role>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "dog" */
  insert_dog?: Maybe<Dog_Mutation_Response>;
  /** insert a single row into the table: "dog" */
  insert_dog_one?: Maybe<Dog>;
  /** insert data into the table: "status" */
  insert_status?: Maybe<Status_Mutation_Response>;
  /** insert a single row into the table: "status" */
  insert_status_one?: Maybe<Status>;
  /** insert data into the table: "walk" */
  insert_walk?: Maybe<Walk_Mutation_Response>;
  /** insert a single row into the table: "walk" */
  insert_walk_one?: Maybe<Walk>;
  login?: Maybe<LoginResult>;
  register?: Maybe<RegisterResult>;
  /** update data of the table: "auth.role" */
  update_auth_role?: Maybe<Auth_Role_Mutation_Response>;
  /** update single row of the table: "auth.role" */
  update_auth_role_by_pk?: Maybe<Auth_Role>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update data of the table: "dog" */
  update_dog?: Maybe<Dog_Mutation_Response>;
  /** update single row of the table: "dog" */
  update_dog_by_pk?: Maybe<Dog>;
  /** update data of the table: "status" */
  update_status?: Maybe<Status_Mutation_Response>;
  /** update single row of the table: "status" */
  update_status_by_pk?: Maybe<Status>;
  /** update data of the table: "walk" */
  update_walk?: Maybe<Walk_Mutation_Response>;
  /** update single row of the table: "walk" */
  update_walk_by_pk?: Maybe<Walk>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_RoleArgs = {
  where: Auth_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Role_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DogArgs = {
  where: Dog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dog_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StatusArgs = {
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_WalkArgs = {
  where: Walk_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Walk_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_RoleArgs = {
  objects: Array<Auth_Role_Insert_Input>;
  on_conflict?: Maybe<Auth_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Role_OneArgs = {
  object: Auth_Role_Insert_Input;
  on_conflict?: Maybe<Auth_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DogArgs = {
  objects: Array<Dog_Insert_Input>;
  on_conflict?: Maybe<Dog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dog_OneArgs = {
  object: Dog_Insert_Input;
  on_conflict?: Maybe<Dog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StatusArgs = {
  objects: Array<Status_Insert_Input>;
  on_conflict?: Maybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_OneArgs = {
  object: Status_Insert_Input;
  on_conflict?: Maybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WalkArgs = {
  objects: Array<Walk_Insert_Input>;
  on_conflict?: Maybe<Walk_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Walk_OneArgs = {
  object: Walk_Insert_Input;
  on_conflict?: Maybe<Walk_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  args: LoginArgs;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  args: RegisterArgs;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RoleArgs = {
  _set?: Maybe<Auth_Role_Set_Input>;
  where: Auth_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Role_By_PkArgs = {
  _set?: Maybe<Auth_Role_Set_Input>;
  pk_columns: Auth_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _inc?: Maybe<Auth_Users_Inc_Input>;
  _set?: Maybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _inc?: Maybe<Auth_Users_Inc_Input>;
  _set?: Maybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DogArgs = {
  _inc?: Maybe<Dog_Inc_Input>;
  _set?: Maybe<Dog_Set_Input>;
  where: Dog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dog_By_PkArgs = {
  _inc?: Maybe<Dog_Inc_Input>;
  _set?: Maybe<Dog_Set_Input>;
  pk_columns: Dog_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StatusArgs = {
  _set?: Maybe<Status_Set_Input>;
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_By_PkArgs = {
  _set?: Maybe<Status_Set_Input>;
  pk_columns: Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WalkArgs = {
  _inc?: Maybe<Walk_Inc_Input>;
  _set?: Maybe<Walk_Set_Input>;
  where: Walk_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Walk_By_PkArgs = {
  _inc?: Maybe<Walk_Inc_Input>;
  _set?: Maybe<Walk_Set_Input>;
  pk_columns: Walk_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.role" */
  auth_role: Array<Auth_Role>;
  /** fetch aggregated fields from the table: "auth.role" */
  auth_role_aggregate: Auth_Role_Aggregate;
  /** fetch data from the table: "auth.role" using primary key columns */
  auth_role_by_pk?: Maybe<Auth_Role>;
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "dog" */
  dog: Array<Dog>;
  /** fetch aggregated fields from the table: "dog" */
  dog_aggregate: Dog_Aggregate;
  /** fetch data from the table: "dog" using primary key columns */
  dog_by_pk?: Maybe<Dog>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "walk" */
  walk: Array<Walk>;
  /** fetch aggregated fields from the table: "walk" */
  walk_aggregate: Walk_Aggregate;
  /** fetch data from the table: "walk" using primary key columns */
  walk_by_pk?: Maybe<Walk>;
};


export type Query_RootAuth_RoleArgs = {
  distinct_on?: Maybe<Array<Auth_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Role_Order_By>>;
  where?: Maybe<Auth_Role_Bool_Exp>;
};


export type Query_RootAuth_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Role_Order_By>>;
  where?: Maybe<Auth_Role_Bool_Exp>;
};


export type Query_RootAuth_Role_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootDogArgs = {
  distinct_on?: Maybe<Array<Dog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dog_Order_By>>;
  where?: Maybe<Dog_Bool_Exp>;
};


export type Query_RootDog_AggregateArgs = {
  distinct_on?: Maybe<Array<Dog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dog_Order_By>>;
  where?: Maybe<Dog_Bool_Exp>;
};


export type Query_RootDog_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStatusArgs = {
  distinct_on?: Maybe<Array<Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};


export type Query_RootStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};


export type Query_RootStatus_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootWalkArgs = {
  distinct_on?: Maybe<Array<Walk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Walk_Order_By>>;
  where?: Maybe<Walk_Bool_Exp>;
};


export type Query_RootWalk_AggregateArgs = {
  distinct_on?: Maybe<Array<Walk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Walk_Order_By>>;
  where?: Maybe<Walk_Bool_Exp>;
};


export type Query_RootWalk_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "status" */
export type Status = {
  __typename?: 'status';
  comment: Scalars['String'];
  id: Scalars['String'];
};

/** aggregated selection of "status" */
export type Status_Aggregate = {
  __typename?: 'status_aggregate';
  aggregate?: Maybe<Status_Aggregate_Fields>;
  nodes: Array<Status>;
};

/** aggregate fields of "status" */
export type Status_Aggregate_Fields = {
  __typename?: 'status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Status_Max_Fields>;
  min?: Maybe<Status_Min_Fields>;
};


/** aggregate fields of "status" */
export type Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "status". All fields are combined with a logical 'AND'. */
export type Status_Bool_Exp = {
  _and?: Maybe<Array<Status_Bool_Exp>>;
  _not?: Maybe<Status_Bool_Exp>;
  _or?: Maybe<Array<Status_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "status" */
export enum Status_Constraint {
  /** unique or primary key constraint */
  StatusPkey = 'status_pkey'
}

/** input type for inserting data into table "status" */
export type Status_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Status_Max_Fields = {
  __typename?: 'status_max_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Status_Min_Fields = {
  __typename?: 'status_min_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "status" */
export type Status_Mutation_Response = {
  __typename?: 'status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Status>;
};

/** input type for inserting object relation for remote table "status" */
export type Status_Obj_Rel_Insert_Input = {
  data: Status_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Status_On_Conflict>;
};

/** on conflict condition type for table "status" */
export type Status_On_Conflict = {
  constraint: Status_Constraint;
  update_columns?: Array<Status_Update_Column>;
  where?: Maybe<Status_Bool_Exp>;
};

/** Ordering options when selecting data from "status". */
export type Status_Order_By = {
  comment?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: status */
export type Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "status" */
export enum Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "status" */
export type Status_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "status" */
export enum Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.role" */
  auth_role: Array<Auth_Role>;
  /** fetch aggregated fields from the table: "auth.role" */
  auth_role_aggregate: Auth_Role_Aggregate;
  /** fetch data from the table: "auth.role" using primary key columns */
  auth_role_by_pk?: Maybe<Auth_Role>;
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "dog" */
  dog: Array<Dog>;
  /** fetch aggregated fields from the table: "dog" */
  dog_aggregate: Dog_Aggregate;
  /** fetch data from the table: "dog" using primary key columns */
  dog_by_pk?: Maybe<Dog>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "walk" */
  walk: Array<Walk>;
  /** fetch aggregated fields from the table: "walk" */
  walk_aggregate: Walk_Aggregate;
  /** fetch data from the table: "walk" using primary key columns */
  walk_by_pk?: Maybe<Walk>;
};


export type Subscription_RootAuth_RoleArgs = {
  distinct_on?: Maybe<Array<Auth_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Role_Order_By>>;
  where?: Maybe<Auth_Role_Bool_Exp>;
};


export type Subscription_RootAuth_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Role_Order_By>>;
  where?: Maybe<Auth_Role_Bool_Exp>;
};


export type Subscription_RootAuth_Role_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDogArgs = {
  distinct_on?: Maybe<Array<Dog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dog_Order_By>>;
  where?: Maybe<Dog_Bool_Exp>;
};


export type Subscription_RootDog_AggregateArgs = {
  distinct_on?: Maybe<Array<Dog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dog_Order_By>>;
  where?: Maybe<Dog_Bool_Exp>;
};


export type Subscription_RootDog_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStatusArgs = {
  distinct_on?: Maybe<Array<Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootWalkArgs = {
  distinct_on?: Maybe<Array<Walk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Walk_Order_By>>;
  where?: Maybe<Walk_Bool_Exp>;
};


export type Subscription_RootWalk_AggregateArgs = {
  distinct_on?: Maybe<Array<Walk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Walk_Order_By>>;
  where?: Maybe<Walk_Bool_Exp>;
};


export type Subscription_RootWalk_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "walk" */
export type Walk = {
  __typename?: 'walk';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  dog: Dog;
  dog_id: Scalars['Int'];
  dogs_seen: Scalars['Int'];
  dogs_seen_reacted: Scalars['Int'];
  id: Scalars['Int'];
  jump_handlage?: Maybe<Scalars['String']>;
  jumps: Scalars['Int'];
  medical_concern?: Maybe<Scalars['String']>;
  other_concerns: Scalars['String'];
  peed: Scalars['Boolean'];
  pooped: Scalars['Boolean'];
  seen_dogs_reaction?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  walker: Auth_Users;
  walker_id: Scalars['Int'];
};

/** aggregated selection of "walk" */
export type Walk_Aggregate = {
  __typename?: 'walk_aggregate';
  aggregate?: Maybe<Walk_Aggregate_Fields>;
  nodes: Array<Walk>;
};

/** aggregate fields of "walk" */
export type Walk_Aggregate_Fields = {
  __typename?: 'walk_aggregate_fields';
  avg?: Maybe<Walk_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Walk_Max_Fields>;
  min?: Maybe<Walk_Min_Fields>;
  stddev?: Maybe<Walk_Stddev_Fields>;
  stddev_pop?: Maybe<Walk_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Walk_Stddev_Samp_Fields>;
  sum?: Maybe<Walk_Sum_Fields>;
  var_pop?: Maybe<Walk_Var_Pop_Fields>;
  var_samp?: Maybe<Walk_Var_Samp_Fields>;
  variance?: Maybe<Walk_Variance_Fields>;
};


/** aggregate fields of "walk" */
export type Walk_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Walk_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "walk" */
export type Walk_Aggregate_Order_By = {
  avg?: Maybe<Walk_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Walk_Max_Order_By>;
  min?: Maybe<Walk_Min_Order_By>;
  stddev?: Maybe<Walk_Stddev_Order_By>;
  stddev_pop?: Maybe<Walk_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Walk_Stddev_Samp_Order_By>;
  sum?: Maybe<Walk_Sum_Order_By>;
  var_pop?: Maybe<Walk_Var_Pop_Order_By>;
  var_samp?: Maybe<Walk_Var_Samp_Order_By>;
  variance?: Maybe<Walk_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "walk" */
export type Walk_Arr_Rel_Insert_Input = {
  data: Array<Walk_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Walk_On_Conflict>;
};

/** aggregate avg on columns */
export type Walk_Avg_Fields = {
  __typename?: 'walk_avg_fields';
  dog_id?: Maybe<Scalars['Float']>;
  dogs_seen?: Maybe<Scalars['Float']>;
  dogs_seen_reacted?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  jumps?: Maybe<Scalars['Float']>;
  walker_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "walk" */
export type Walk_Avg_Order_By = {
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "walk". All fields are combined with a logical 'AND'. */
export type Walk_Bool_Exp = {
  _and?: Maybe<Array<Walk_Bool_Exp>>;
  _not?: Maybe<Walk_Bool_Exp>;
  _or?: Maybe<Array<Walk_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dog?: Maybe<Dog_Bool_Exp>;
  dog_id?: Maybe<Int_Comparison_Exp>;
  dogs_seen?: Maybe<Int_Comparison_Exp>;
  dogs_seen_reacted?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  jump_handlage?: Maybe<String_Comparison_Exp>;
  jumps?: Maybe<Int_Comparison_Exp>;
  medical_concern?: Maybe<String_Comparison_Exp>;
  other_concerns?: Maybe<String_Comparison_Exp>;
  peed?: Maybe<Boolean_Comparison_Exp>;
  pooped?: Maybe<Boolean_Comparison_Exp>;
  seen_dogs_reaction?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  walker?: Maybe<Auth_Users_Bool_Exp>;
  walker_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "walk" */
export enum Walk_Constraint {
  /** unique or primary key constraint */
  WalkPkey = 'walk_pkey'
}

/** input type for incrementing numeric columns in table "walk" */
export type Walk_Inc_Input = {
  dog_id?: Maybe<Scalars['Int']>;
  dogs_seen?: Maybe<Scalars['Int']>;
  dogs_seen_reacted?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jumps?: Maybe<Scalars['Int']>;
  walker_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "walk" */
export type Walk_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dog?: Maybe<Dog_Obj_Rel_Insert_Input>;
  dog_id?: Maybe<Scalars['Int']>;
  dogs_seen?: Maybe<Scalars['Int']>;
  dogs_seen_reacted?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jump_handlage?: Maybe<Scalars['String']>;
  jumps?: Maybe<Scalars['Int']>;
  medical_concern?: Maybe<Scalars['String']>;
  other_concerns?: Maybe<Scalars['String']>;
  peed?: Maybe<Scalars['Boolean']>;
  pooped?: Maybe<Scalars['Boolean']>;
  seen_dogs_reaction?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  walker?: Maybe<Auth_Users_Obj_Rel_Insert_Input>;
  walker_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Walk_Max_Fields = {
  __typename?: 'walk_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dog_id?: Maybe<Scalars['Int']>;
  dogs_seen?: Maybe<Scalars['Int']>;
  dogs_seen_reacted?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jump_handlage?: Maybe<Scalars['String']>;
  jumps?: Maybe<Scalars['Int']>;
  medical_concern?: Maybe<Scalars['String']>;
  other_concerns?: Maybe<Scalars['String']>;
  seen_dogs_reaction?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  walker_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "walk" */
export type Walk_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jump_handlage?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  medical_concern?: Maybe<Order_By>;
  other_concerns?: Maybe<Order_By>;
  seen_dogs_reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Walk_Min_Fields = {
  __typename?: 'walk_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dog_id?: Maybe<Scalars['Int']>;
  dogs_seen?: Maybe<Scalars['Int']>;
  dogs_seen_reacted?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jump_handlage?: Maybe<Scalars['String']>;
  jumps?: Maybe<Scalars['Int']>;
  medical_concern?: Maybe<Scalars['String']>;
  other_concerns?: Maybe<Scalars['String']>;
  seen_dogs_reaction?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  walker_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "walk" */
export type Walk_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jump_handlage?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  medical_concern?: Maybe<Order_By>;
  other_concerns?: Maybe<Order_By>;
  seen_dogs_reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "walk" */
export type Walk_Mutation_Response = {
  __typename?: 'walk_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Walk>;
};

/** on conflict condition type for table "walk" */
export type Walk_On_Conflict = {
  constraint: Walk_Constraint;
  update_columns?: Array<Walk_Update_Column>;
  where?: Maybe<Walk_Bool_Exp>;
};

/** Ordering options when selecting data from "walk". */
export type Walk_Order_By = {
  created_at?: Maybe<Order_By>;
  dog?: Maybe<Dog_Order_By>;
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jump_handlage?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  medical_concern?: Maybe<Order_By>;
  other_concerns?: Maybe<Order_By>;
  peed?: Maybe<Order_By>;
  pooped?: Maybe<Order_By>;
  seen_dogs_reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  walker?: Maybe<Auth_Users_Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** primary key columns input for table: walk */
export type Walk_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "walk" */
export enum Walk_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DogId = 'dog_id',
  /** column name */
  DogsSeen = 'dogs_seen',
  /** column name */
  DogsSeenReacted = 'dogs_seen_reacted',
  /** column name */
  Id = 'id',
  /** column name */
  JumpHandlage = 'jump_handlage',
  /** column name */
  Jumps = 'jumps',
  /** column name */
  MedicalConcern = 'medical_concern',
  /** column name */
  OtherConcerns = 'other_concerns',
  /** column name */
  Peed = 'peed',
  /** column name */
  Pooped = 'pooped',
  /** column name */
  SeenDogsReaction = 'seen_dogs_reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WalkerId = 'walker_id'
}

/** input type for updating data in table "walk" */
export type Walk_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dog_id?: Maybe<Scalars['Int']>;
  dogs_seen?: Maybe<Scalars['Int']>;
  dogs_seen_reacted?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jump_handlage?: Maybe<Scalars['String']>;
  jumps?: Maybe<Scalars['Int']>;
  medical_concern?: Maybe<Scalars['String']>;
  other_concerns?: Maybe<Scalars['String']>;
  peed?: Maybe<Scalars['Boolean']>;
  pooped?: Maybe<Scalars['Boolean']>;
  seen_dogs_reaction?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  walker_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Walk_Stddev_Fields = {
  __typename?: 'walk_stddev_fields';
  dog_id?: Maybe<Scalars['Float']>;
  dogs_seen?: Maybe<Scalars['Float']>;
  dogs_seen_reacted?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  jumps?: Maybe<Scalars['Float']>;
  walker_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "walk" */
export type Walk_Stddev_Order_By = {
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Walk_Stddev_Pop_Fields = {
  __typename?: 'walk_stddev_pop_fields';
  dog_id?: Maybe<Scalars['Float']>;
  dogs_seen?: Maybe<Scalars['Float']>;
  dogs_seen_reacted?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  jumps?: Maybe<Scalars['Float']>;
  walker_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "walk" */
export type Walk_Stddev_Pop_Order_By = {
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Walk_Stddev_Samp_Fields = {
  __typename?: 'walk_stddev_samp_fields';
  dog_id?: Maybe<Scalars['Float']>;
  dogs_seen?: Maybe<Scalars['Float']>;
  dogs_seen_reacted?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  jumps?: Maybe<Scalars['Float']>;
  walker_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "walk" */
export type Walk_Stddev_Samp_Order_By = {
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Walk_Sum_Fields = {
  __typename?: 'walk_sum_fields';
  dog_id?: Maybe<Scalars['Int']>;
  dogs_seen?: Maybe<Scalars['Int']>;
  dogs_seen_reacted?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jumps?: Maybe<Scalars['Int']>;
  walker_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "walk" */
export type Walk_Sum_Order_By = {
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** update columns of table "walk" */
export enum Walk_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DogId = 'dog_id',
  /** column name */
  DogsSeen = 'dogs_seen',
  /** column name */
  DogsSeenReacted = 'dogs_seen_reacted',
  /** column name */
  Id = 'id',
  /** column name */
  JumpHandlage = 'jump_handlage',
  /** column name */
  Jumps = 'jumps',
  /** column name */
  MedicalConcern = 'medical_concern',
  /** column name */
  OtherConcerns = 'other_concerns',
  /** column name */
  Peed = 'peed',
  /** column name */
  Pooped = 'pooped',
  /** column name */
  SeenDogsReaction = 'seen_dogs_reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WalkerId = 'walker_id'
}

/** aggregate var_pop on columns */
export type Walk_Var_Pop_Fields = {
  __typename?: 'walk_var_pop_fields';
  dog_id?: Maybe<Scalars['Float']>;
  dogs_seen?: Maybe<Scalars['Float']>;
  dogs_seen_reacted?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  jumps?: Maybe<Scalars['Float']>;
  walker_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "walk" */
export type Walk_Var_Pop_Order_By = {
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Walk_Var_Samp_Fields = {
  __typename?: 'walk_var_samp_fields';
  dog_id?: Maybe<Scalars['Float']>;
  dogs_seen?: Maybe<Scalars['Float']>;
  dogs_seen_reacted?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  jumps?: Maybe<Scalars['Float']>;
  walker_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "walk" */
export type Walk_Var_Samp_Order_By = {
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Walk_Variance_Fields = {
  __typename?: 'walk_variance_fields';
  dog_id?: Maybe<Scalars['Float']>;
  dogs_seen?: Maybe<Scalars['Float']>;
  dogs_seen_reacted?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  jumps?: Maybe<Scalars['Float']>;
  walker_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "walk" */
export type Walk_Variance_Order_By = {
  dog_id?: Maybe<Order_By>;
  dogs_seen?: Maybe<Order_By>;
  dogs_seen_reacted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jumps?: Maybe<Order_By>;
  walker_id?: Maybe<Order_By>;
};

export type LoginMutationVariables = Exact<{
  args: LoginArgs;
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: Maybe<{ __typename?: 'LoginResult', token: string }> };

export type RegisterMutationVariables = Exact<{
  args: RegisterArgs;
}>;


export type RegisterMutation = { __typename?: 'mutation_root', register?: Maybe<{ __typename?: 'RegisterResult', token: string }> };

export type UserFieldsFragment = { __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string };

export type UsersQueryVariables = Exact<{
  distinct_on?: Maybe<Array<Auth_Users_Select_Column> | Auth_Users_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By> | Auth_Users_Order_By>;
  where?: Maybe<Auth_Users_Bool_Exp>;
}>;


export type UsersQuery = { __typename?: 'query_root', auth_users: Array<{ __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string }> };

export type UsersStreamSubscriptionVariables = Exact<{
  distinct_on?: Maybe<Array<Auth_Users_Select_Column> | Auth_Users_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By> | Auth_Users_Order_By>;
  where?: Maybe<Auth_Users_Bool_Exp>;
}>;


export type UsersStreamSubscription = { __typename?: 'subscription_root', auth_users: Array<{ __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string }> };

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on auth_users {
  id
  first_name
  last_name
  email
}
    `;
export const LoginDocument = gql`
    mutation Login($args: LoginArgs!) {
  login(args: $args) {
    token
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($args: RegisterArgs!) {
  register(args: $args) {
    token
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const UsersDocument = gql`
    query Users($distinct_on: [auth_users_select_column!], $limit: Int, $offset: Int, $order_by: [auth_users_order_by!], $where: auth_users_bool_exp) {
  auth_users(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<never, UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};
export const UsersStreamDocument = gql`
    subscription UsersStream($distinct_on: [auth_users_select_column!], $limit: Int, $offset: Int, $order_by: [auth_users_order_by!], $where: auth_users_bool_exp) {
  auth_users(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersStreamSubscription<R = UsersStreamSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, UsersStreamSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<UsersStreamSubscription, R>) {
  return Urql.useSubscription<UsersStreamSubscription, R, UsersStreamSubscriptionVariables>({ query: UsersStreamDocument, ...options }, handler);
};