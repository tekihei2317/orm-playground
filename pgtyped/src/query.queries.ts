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


