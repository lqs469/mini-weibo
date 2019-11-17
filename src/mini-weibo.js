
import './mini-weibo.css';

document.addEventListener("DOMContentLoaded", () => {
  const init = (checkFn, cb) => {
    if (checkFn()) {
      cb();
      return;
    } else {
      setTimeout(() => {
        init(checkFn, cb);
      }, 200);
    }
  }
  
  init(() => {
    const searchPlaceholder = document.querySelector('.gn_search_v2 .placeholder');
    return searchPlaceholder;
  }, () => {
    const searchPlaceholder = document.querySelector('.gn_search_v2 .placeholder');
    const searchInput = document.querySelector('[node-type="searchInput"]');

    searchPlaceholder.style.display = 'block';
    searchPlaceholder.innerText = '微博搜索';
    searchInput.addEventListener('focus', (event) => {
      if (searchPlaceholder) {
        searchPlaceholder.innerText = '';
      }
    });
    
    searchInput.addEventListener('blur', (event) => {
      if (searchPlaceholder) {
        searchPlaceholder.innerText = '微博搜索';
      }
    });
  });

  init(() => {
    const headpic = document.querySelector('.headpic');
    return headpic;
  }, () => {
    const headpic = document.querySelector('.headpic');

    const newHeadpic = document.createElement('div');
    newHeadpic.innerHTML = headpic.innerHTML;
    newHeadpic.className = 'custom-headpic';

    document.body.appendChild(newHeadpic)
  })
});

