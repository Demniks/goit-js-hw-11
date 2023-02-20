
export default function createMarkup(hits) {
  return `<div class="photo-card">
   <a href="${hits.largeImageURL}"><img src="${hits.webformatURL}" alt="${hits.tags}" loading="lazy" /></a>
    <div class="info">
      <p class="info-item">
      <b>likes</b>
        <span class="info-text">${hits.likes}</span>
      </p>
      <p class="info-item">
     <b>views</b>
       <span class="info-text">${hits.views}</span>
     </p>
      <p class="info-item">
      <b>comments</b>
        <span class="info-text">${hits.comments}</span>
      </p>
     <p class="info-item">
      <b>downloads</b>
        <span class="info-text">${hits.downloads}</span>
     </p>
    </div>
  </div>`;
}

// export default function renderCardForImages(image) {
//   return `<div class="photo-card">
//   <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" /></a>
//    <div class="info">
//      <p class="info-item">
//      <b>likes</b>
//        <span class="info-text">${image.likes}</span>
//      </p>
//      <p class="info-item">
//     <b>views</b>
//       <span class="info-text">${image.views}</span>
//     </p>
//      <p class="info-item">
//      <b>comments</b>
//        <span class="info-text">${image.comments}</span>
//      </p>
//     <p class="info-item">
//      <b>downloads</b>
//        <span class="info-text">${image.downloads}</span>
//     </p>
//    </div>
//  </div>`;

// }

// function renderImagesMarkup(image) {
//   return `<div class="photo-card">
//   <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//     <b>likes</b>
//       <span class="info-text">${image.likes}</span>
//     </p>
//     <p class="info-item">
//     <b>views</b>
//       <span class="info-text">${image.views}</span>
//     </p>
//     <p class="info-item">
//     <b>comments</b>
//       <span class="info-text">${image.comments}</span>
//     </p>
//     <p class="info-item">
//     <b>downloads</b>
//       <span class="info-text">${image.downloads}</span>
//     </p>
//   </div>
// </div>`;
// }

//////////////////////////////////////////////

// export default function renderCardForImages(image) {
//   return `<div class="photo-card">
//   <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" /></a>
//    <div class="info">
//      <p class="info-item">
//      <b>likes</b>
//        <span class="info-text">${image.likes}</span>
//      </p>
//      <p class="info-item">
//     <b>views</b>
//       <span class="info-text">${image.views}</span>
//     </p>
//      <p class="info-item">
//      <b>comments</b>
//        <span class="info-text">${image.comments}</span>
//      </p>
//     <p class="info-item">
//      <b>downloads</b>
//        <span class="info-text">${image.downloads}</span>
//     </p>
//    </div>
//  </div>`;
//   galleryEl.insertAdjacentHTML(`beforeend`, markUp);

//   if (arr.hits.length > 0) {
//     loadMoreBtn.style.display = `block`;
//   }
//   console.log(arr.hits);
//   if (Math.floor(arr.totalHits / 40) < page && arr.hits.length != 0) {
//     loadMoreBtn.style.display = 'none';
//     Notiflix.Notify.info(
//       "We're sorry, but you've reached the end of search results."
//     );
//   }
//  }
