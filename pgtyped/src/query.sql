/* @name findAllPosts */
select * from "Post" where id = :postId and "isDraft" = :isDraft;
