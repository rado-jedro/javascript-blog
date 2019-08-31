  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */
    event.preventDefault();

    const clickedElement = this;
    console.log('clickedElement:', clickedElement);

    console.log('clickedElement (with plus): ' + clickedElement);
    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles  = document.querySelectorAll('.post');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    
    console.log(targetArticle);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log(targetArticle);
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


  function generateTitleLinks(){

  /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    console.log(titleList);
    titleList.innerHTML = '';
    
  /* for each article */
    const articles = document.querySelectorAll('.post');
    
    let html = '';
    for (let article of articles){
    
    /* get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);
      
    /* find the title element */
      
    /* get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);
    /* create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);
    /* insert link into titleList */
      html = html + linkHTML;
    }
  titleList.innerHTML = html;  
}
console.log(optTitleListSelector)
generateTitleLinks(optTitleListSelector);



  //test
  /*
  document.getElementById('test-button').addEventListener('click', function(){
    const post = document.querySelectorAll('.post');
    console.log('posts:', post);
  });
  */