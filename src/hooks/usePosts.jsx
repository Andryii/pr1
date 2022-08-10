
import React, { useMemo, useState } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return posts;
    }
  }, [sort, posts]);

  return sortedPosts
};


export const usePosts = (posts, sort, query)=>
{
    const sortedPosts = useSortedPosts(posts,sort);
    const sortedAndSerchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => {
          return post.title.toLowerCase().includes(query.toLowerCase());
        });
      }, [query, sortedPosts]);
      return sortedAndSerchedPosts;
}