/** Types generated for queries found in "src/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindAllPosts' parameters type */
export interface IFindAllPostsParams {
  isDraft?: boolean | null | void;
  postId?: string | null | void;
}

/** 'FindAllPosts' return type */
export interface IFindAllPostsResult {
  body: string;
  createdAt: Date;
  id: string;
  isDraft: boolean;
  title: string;
  updatedAt: Date;
}

/** 'FindAllPosts' query type */
export interface IFindAllPostsQuery {
  params: IFindAllPostsParams;
  result: IFindAllPostsResult;
}

const findAllPostsIR: any = {"usedParamSet":{"postId":true,"isDraft":true},"params":[{"name":"postId","required":false,"transform":{"type":"scalar"},"locs":[{"a":32,"b":38}]},{"name":"isDraft","required":false,"transform":{"type":"scalar"},"locs":[{"a":56,"b":63}]}],"statement":"select * from \"Post\" where id = :postId and \"isDraft\" = :isDraft"};

/**
 * Query generated from SQL:
 * ```
 * select * from "Post" where id = :postId and "isDraft" = :isDraft
 * ```
 */
export const findAllPosts = new PreparedQuery<IFindAllPostsParams,IFindAllPostsResult>(findAllPostsIR);


/** 'FindPostById' parameters type */
export interface IFindPostByIdParams {
  postId?: string | null | void;
}

/** 'FindPostById' return type */
export interface IFindPostByIdResult {
  body: string;
  createdAt: Date;
  id: string;
  isDraft: boolean;
  title: string;
  updatedAt: Date;
}

/** 'FindPostById' query type */
export interface IFindPostByIdQuery {
  params: IFindPostByIdParams;
  result: IFindPostByIdResult;
}

const findPostByIdIR: any = {"usedParamSet":{"postId":true},"params":[{"name":"postId","required":false,"transform":{"type":"scalar"},"locs":[{"a":32,"b":38}]}],"statement":"select * from \"Post\" where id = :postId"};

/**
 * Query generated from SQL:
 * ```
 * select * from "Post" where id = :postId
 * ```
 */
export const findPostById = new PreparedQuery<IFindPostByIdParams,IFindPostByIdResult>(findPostByIdIR);


/** 'FindPostWithComments' parameters type */
export interface IFindPostWithCommentsParams {
  postId?: string | null | void;
}

/** 'FindPostWithComments' return type */
export interface IFindPostWithCommentsResult {
  body: string;
  id: string;
}

/** 'FindPostWithComments' query type */
export interface IFindPostWithCommentsQuery {
  params: IFindPostWithCommentsParams;
  result: IFindPostWithCommentsResult;
}

const findPostWithCommentsIR: any = {"usedParamSet":{"postId":true},"params":[{"name":"postId","required":false,"transform":{"type":"scalar"},"locs":[{"a":138,"b":144}]}],"statement":"select\n  \"Post\".\"id\",\n  \"Comment\".\"body\"\nfrom\n  \"Post\"\n  inner join \"Comment\"\n  on \"Post\".\"id\" = \"Comment\".\"postId\"\nwhere\n  \"Post\".\"id\" = :postId"};

/**
 * Query generated from SQL:
 * ```
 * select
 *   "Post"."id",
 *   "Comment"."body"
 * from
 *   "Post"
 *   inner join "Comment"
 *   on "Post"."id" = "Comment"."postId"
 * where
 *   "Post"."id" = :postId
 * ```
 */
export const findPostWithComments = new PreparedQuery<IFindPostWithCommentsParams,IFindPostWithCommentsResult>(findPostWithCommentsIR);


