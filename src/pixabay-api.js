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

  async getImages() {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;

    const response = await axios.get(URL);

    this.totalHits = response.data.totalHits;
    return response.data.hits;
  }
  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
