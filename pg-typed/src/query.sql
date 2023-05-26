/* @name findAllPosts */
select * from "Post" where id = :postId and "isDraft" = :isDraft;

/* @name findPostById */
select * from "Post" where id = :postId;

/* @name findPostWithComments */
select
  "Post"."id",
  "Comment"."body"
from
  "Post"
  inner join "Comment"
  on "Post"."id" = "Comment"."postId"
where
  "Post"."id" = :postId
;
