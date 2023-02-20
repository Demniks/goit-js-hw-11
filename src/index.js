import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import PixabayServise from './pixabay-api';
import LoadMoreBtn from './components/LoadMoreBtn';
import createMarkup from './render';
import Notiflix from 'notiflix';

const searchForm = document.querySelector('#search-form');
const galleryEl = document.querySelector('.gallery');
const galleryElList = document.querySelector('.gallery-list');
const pixabayServise = new PixabayServise();
const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more',
  isHidden: true,
});

searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.button.addEventListener('click', fetchImages);

function onSearchForm(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const value = form.elements.searchQuery.value.trim();

  pixabayServise.searchQuery = value;

  pixabayServise.resetPage();
  clearGalleryList();
  loadMoreBtn.show();
const lightbox = new SimpleLightbox('.gallery a');
  fetchImages().finally(() => {
    form.reset();
    includeHits();
    
  });
}

function fetchImages() {
  loadMoreBtn.disable();
  return pixabayServise
    .getImages()
    .then(hits => {
      if (hits.length === 0) throw new Error('no hits');

      return hits.reduce((markup, hit) => createMarkup(hit) + markup, '');
    })
    .then(markup => {
      onEndMessage();
      appendToGalleryList(markup);
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
      loadMoreBtn.enable();
    })
    .catch(onError);
}

function appendToGalleryList(markup) {
  galleryEl.insertAdjacentHTML('beforeend', markup);
}

function clearGalleryList() {
  galleryEl.innerHTML = '';
}

function onError(err) {
  loadMoreBtn.hide();
  Notiflix.Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function includeHits() {
  if (pixabayServise.totalHits !== 0)
    Notiflix.Notify.success(
      `Hooray! We found ${pixabayServise.totalHits} images.`
    );
}

function onEndMessage() {
  console.log(pixabayServise.page);
  const pages = Math.ceil(pixabayServise.totalHits / pixabayServise.per_page);
  if (pixabayServise.page >= pages) {
    loadMoreBtn.hide();
    Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
}
//////////////////////////////////////////////
//     if (arrOfItems.data.totalHits > 0 && page === 1) {
//       Notiflix.Notify.info(
//         `Hooray! We found ${arrOfItems.data.totalHits} images.`
//       );
//     }

//     if (arrOfItems.data.totalHits === 0) {
//       Notiflix.Notify.failure(
//         `Sorry, there are no images matching your search query. Please try again.`
//       );
//     }

//     createImagesCard(arrOfItems.data);
//   } catch (error) {
//     Notiflix.Notify.warning(error);
//   }
// }
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
// }

/////////////////////////////////////////////////////////////////

// import Notiflix from 'notiflix';
// import ApiPixabay from './pixabay-api';
// const searchForm = document.querySelector('#search-form');
// const galleryEl = document.querySelector('.gallery');
// const loadMoreBtn = document.querySelector('.load-more');

//  const form = document.querySelector('#search-form');
//  const galleryEl = document.querySelector('.gallery');
//  const loadBtn = document.querySelector('.load-more');
//  const tittle = document.querySelector('.search-tittle');
//  const footer = document.querySelector('footer');
// const apiPixabay = new ApiPixabay();

// searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.addEventListener('click', onLoadMore);

// // async function onSubmitForm(e) {
// //   e.preventDefault();

// //   observer.observe(refs.infitity);
// //   clearGallery();
// //   pixabay.resetPage();

// //   pixabay.searchQuery = e.currentTarget.searchQuery.value.trim();

// //   if (pixabay.searchQuery === '') {
// //     Notify.failure(
// //       'Sorry, there are no images matching your search query. Please try again.'
// //     );

// //     return;
// //   }

// //   try {
// //     const { hits, totalHits } = await pixabay.getImages();
// //     pixabay.setTotal(totalHits);

// //     if (hits.length === 0) {
// //       return Notify.failure(
// //         'Sorry, there are no images matching your search query. Please try again.'
// //       );
// //     }

// //     Notify.success(`Hooray! We found ${totalHits} images.`);

// //     const markup = createMarkupImg(hits);
// //     updateMarkup(markup);

// //   } catch (error) {
// //     console.log(error);
// //     clearGallery();
// //   }
// // }

// async function onSearch(e) {
//   e.preventDefault();
//   clearGallery();

//   apiPixabay.querry = e.currentTarget.elements.searchQuery.value.trim();

//   if (apiPixabay.searchQuery === '') {
//     console.log(apiPixabay);
//     Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//     return;
//   }
//   apiPixabay.resetPage();
//   apiPixabay.fetchImages().then(createImagesCard);
// }

// function onLoadMore() {
//   apiPixabay.fetchImages().then(createImagesCard);
// }

// function createImagesCard(array) {
//   const cards = array.reduce(
//     (acc, image) => acc + renderImagesMarkup(image),
//     ''
//   );
//   return galleryEl.insertAdjacentHTML('beforeend', cards);
// }

// function clearGallery() {
//   galleryEl.innerHTML = '';
// }
////////////////////////////////////////////////////////////////////////////////////
//WORKING CODE
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import PixabayServise from './pixabay-api';
// import LoadMoreBtn from './components/LoadMoreBtn';
// import createMarkup from './render';
// import Notiflix from 'notiflix';

// const searchForm = document.querySelector('#search-form');
// const galleryEl = document.querySelector('.gallery');
// const galleryElList = document.querySelector('.gallery-list');
// const pixabayServise = new PixabayServise();
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '.load-more',
//   isHidden: true,
// });

// searchForm.addEventListener('submit', onSearchForm);
// loadMoreBtn.button.addEventListener('click', fetchImages);

// function onSearchForm(e) {
//   e.preventDefault();

//   const form = e.currentTarget;

//   const value = form.elements.searchQuery.value.trim();

//   pixabayServise.searchQuery = value;

//   pixabayServise.resetPage();
//   clearGalleryList();
//   loadMoreBtn.show();
//   const lightbox = new SimpleLightbox('.gallery a');
//   fetchImages().finally(() => {
//     form.reset();
//     includeHits();
//   });
// }

// function fetchImages() {
//   loadMoreBtn.disable();
//   return pixabayServise
//     .getImages()
//     .then(hits => {
//       if (hits.length === 0) throw new Error('no hits');

//       return hits.reduce((markup, hit) => createMarkup(hit) + markup, '');
//     })
//     .then(markup => {
//       onEndMessage();
//       appendToGalleryList(markup);
//       const lightbox = new SimpleLightbox('.gallery a');
//       lightbox.refresh();
//       loadMoreBtn.enable();
//     })
//     .catch(onError);
// }

// function appendToGalleryList(markup) {
//   galleryEl.insertAdjacentHTML('beforeend', markup);
// }

// function clearGalleryList() {
//   galleryEl.innerHTML = '';
// }

// function onError(err) {
//   loadMoreBtn.hide();
//   Notiflix.Notify.warning(
//     'Sorry, there are no images matching your search query. Please try again.'
//   );
// }

// function includeHits() {
//   if (pixabayServise.totalHits !== 0)
//     Notiflix.Notify.success(
//       `Hooray! We found ${pixabayServise.totalHits} images.`
//     );
// }

// function onEndMessage() {
//   console.log(pixabayServise.page);
//   const pages = Math.ceil(pixabayServise.totalHits / pixabayServise.per_page);
//   if (pixabayServise.page >= pages) {
//     loadMoreBtn.hide();
//     Notiflix.Notify.failure(
//       "We're sorry, but you've reached the end of search results."
//     );
//   }
// }

