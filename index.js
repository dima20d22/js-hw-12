import{a as y,s as w,i as L}from"./assets/vendor-Ca4mZGCw.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const v="47994824-0d51099febe4e8602bb4fd3aa";let r=1;async function b(a){return await y.get("https://pixabay.com/api/",{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})}function _(){r++}function f(){r=1}const u=document.querySelector(".box");function x(a){a.hits.forEach(o=>{u.innerHTML+=`
        <li class='li'>
          <a href="${o.largeImageURL}" class="img">
            <img class = "img" src="${o.webformatURL}" alt="${o.tags}" />
          </a>
          <div class = "div">
            <p  class="p"><span class="p__span">Likes </span> ${o.likes}</p>
            <p  class="p"><span class="p__span">Views </span> ${o.views}</p>
            <p  class="p"><span class="p__span">Comments </span> ${o.comments}</p>
            <p  class="p"><span class="p__span">Downloads </span> ${o.downloads}</p>
          </div>
        </li>
      `}),new w(".box a",{captionsData:"alt",captionDelay:100,captionPosition:"bottom"}).refresh()}let i=0;async function h(a,s,o,n){try{const e=await b(a);if(console.log(e),e.status!==200)throw new Error("Failed to fetch data.");const t=e.data;if(t.total===0){iziToast.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),o.classList.remove("is-hidden"),s.classList.add("is-hidden");return}x(t),i=t.hits.length,i<15&&i===t.total?s.classList.add("is-hidden"):i<15&&i<t.total?(s.classList.add("is-hidden"),iziToast.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight"})):s.classList.remove("is-hidden")}catch{iziToast.show({message:"An error occurred while fetching the data.",color:"red",position:"topRight"})}finally{n.classList.add("is-hidden")}}const c=document.querySelector(".btn__load-more"),q=document.querySelector("form"),m=document.querySelector("input[type=text]"),d=document.querySelector(".loader"),p=document.querySelector("p");console.log(r);let g="";q.addEventListener("submit",async a=>{a.preventDefault(),f();let s=m.value.trim();if(g=s,f(),s===""){L.show({message:"Please give a valid input.",color:"red",position:"topRight"});return}u.innerHTML="",d.classList.remove("is-hidden"),p.classList.add("is-hidden"),c.classList.add("is-hidden"),await h(s,c,p,d),m.value=""});c.addEventListener("click",async()=>{await h(g,c,p,d),_();const a=u.getBoundingClientRect();window.scrollBy({top:a.bottom-window.innerHeight,behavior:"smooth"}),console.log("Current page:",r)});console.log(window);
//# sourceMappingURL=index.js.map