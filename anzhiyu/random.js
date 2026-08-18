var posts=["2026/07/30/hello-world/","2026/08/08/pwn35-40/","2026/08/04/问题解决1（图片无法加载）/","2026/07/30/创建博客进阶/","2026/08/09/pwn41-46/","2026/07/30/创建博客/","2026/08/18/格式化字符串漏洞基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };