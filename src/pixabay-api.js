import axios from 'axios';
const API_KEY = '33675903-bd7d9339dc8df298be2da6cbf';
export default class PixabayServise {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.totalHits = 0;
    this.per_page = 40;
    this.totalPages = 0;
  }

  getImages() {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
    // return fetch(URL)
    //   .then(response => response.json())
    //   .then(({ hits }) => {
    //     this.nextPage();
    //     return hits;
    //   });

    return axios.get(URL).then(({ data }) => {
      this.nextPage();
      this.totalHits = data.totalHits;
      return data.hits;
    });
  }
  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
///////////////////////
  // setTotal(total) {
  //   return (this.totalPages = total);
  // }

  // resetTotalPage() {
  //   return (this.totalPages = 0);
  // }

  // hasMoreImages() {
  //   return this.page === Math.ceil(this.totalPages / this.per_page);
  // }
}

// export default fetchImages;

// function fetchImages(query) {
//   const API_KEY = '33675903-bd7d9339dc8df298be2da6cbf';
//   const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=page=1&per_page=40`;
//   return fetch(URL).then(response => response.json());
// }

// import axios from 'axios';

// export default class PixabayServise {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     // this.per_page = 40;
//   }

//   fetchPictures() {
//     const API_KEY = '33675903-bd7d9339dc8df298be2da6cbf';
//     const url = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&q=${this.searchQuery}&per_page=40&page=${this.page}`;

//     return axios.get(url);
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
//////////////////////////////////////////
// import Notiflix from 'notiflix';
// import axios from 'axios';

// const API_KEY = '33675903-bd7d9339dc8df298be2da6cbf';

// export default async function fetchImages(name, pageNumber) {
//   try {
//     const response = await axios.get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`
//     );
//     return response.data;
//   } catch (error) {
//     Notiflix.Notify.warning('error');
//   }
// }

// import axios from 'axios';
// export default class ApiPixabay {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.per_page = 40;
//     this.totalPages = 0;
//   }

//   async getImages() {
//     const searchParams = new URLSearchParams({
//       key: '33675903-bd7d9339dc8df298be2da6cbf',
//       q: `${this.searchQuery}`,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       per_page: `${this.per_page}`,
//       page: `${this.page}`,
//     });

//     const { data } = await axios.get(
//       `https://pixabay.com/api/?${searchParams}`
//     );
//     return data;
//   }

//   // fetchImages() {
//   //   const API_KEY = '33675903-bd7d9339dc8df298be2da6cbf';
//   //   return fetch(
//   //     `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo$orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
//   //   )
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       this.page += 1;
//   //       return data.hits;
//   //     });
//   // }

//   resetPage() {
//     this.page = 1;
//   }

//   get querry() {
//     return this.searchQuery;
//   }

//   set querry(newQuerry) {
//     this.searchQuery = newQuerry;
//   }

//   setTotal(total) {
//     return (this.totalPages = total);
//   }

//   resetTotalPage() {
//     return (this.totalPages = 0);
//   }
// }

//////////////////////////////////

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

////////////////////////////////////////////////
//WORKING CODE
// import axios from 'axios';
// const API_KEY = '33675903-bd7d9339dc8df298be2da6cbf';
// export default class PixabayServise {
//   constructor() {
//     this.page = 1;
//     this.searchQuery = '';
//   }

//   getImages() {
//     const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
//     // return fetch(URL)
//     //   .then(response => response.json())
//     //   .then(({ hits }) => {
//     //     this.nextPage();
//     //     return hits;
//     //   });

//     return axios.get(URL).then(({ data }) => {
//       this.nextPage();
//       return data.hits;
//     });
//   }
//   nextPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }
