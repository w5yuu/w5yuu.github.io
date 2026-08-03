var posts=["2026/07/30/创建博客/","2026/07/30/创建博客进阶/","2026/07/30/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };