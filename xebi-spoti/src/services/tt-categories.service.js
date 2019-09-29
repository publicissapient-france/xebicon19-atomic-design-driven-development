import axios from 'axios';

class TtCategoriesService {
  async getTtCategories() {
    const response = await axios.get(`${process.env.VUE_APP_API}/tt-categories.json`);
    return response.data;
  }
}

export default new TtCategoriesService();
