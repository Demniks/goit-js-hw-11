import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import PixabayServise from './pixabay-api';
import LoadMoreBtn from './components/LoadMoreBtn';
import createMarkup from './render';
import Notiflix from 'notiflix';

const searchForm = document.querySelector('#search-form');
const galleryEl = document.querySelector('.gallery');
const pixabayServise = new PixabayServise();
const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more',
  isHidden: true,
});
const lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.button.addEventListener('click', fetchImages);

function onSearchForm(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const value = form.elements.searchQuery.value.trim();

  pixabayServise.searchQuery = value;
  if (pixabayServise.searchQuery === '') {
    onError();
    return;
  }

  pixabayServise.resetPage();
  clearGalleryList();
  loadMoreBtn.show();
  fetchImages().finally(() => {
    form.reset();
    includeHits();
  });
}

async function fetchImages() {
  loadMoreBtn.disable();
  try {
    const hits = await pixabayServise.getImages();
    if (hits.length === 0) throw new Error('no hits');
    const markup = hits.reduce((markup, hit) => createMarkup(hit) + markup, '');
    endImagesMessage();
    appendToGalleryList(markup);
    lightbox.refresh();
    loadMoreBtn.enable();
    pixabayServise.nextPage();
  } catch (err) {
    onError(err);
  }
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

function endImagesMessage() {
  const pages = Math.ceil(pixabayServise.totalHits / pixabayServise.per_page);
  if (pixabayServise.page >= pages) {
    loadMoreBtn.hide();
    Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
}
