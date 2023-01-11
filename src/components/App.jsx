import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './Gallery/ImageGallery';
import GalleryItem from './Gallery/GalleryItem';
import fetchImagesWithQuery from 'services/api';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 0,
    totalHits: null,
    searchResults: [],
    isLoading: false,
    error: null,
    largeImageURL: '',
    isModalOpen: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page, searchResults } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      const response = await fetchImagesWithQuery(searchQuery, page);
      this.setState({
        searchResults: [...searchResults, ...response.data.hits],
        isLoading: false,
        totalHits: response.data.total,
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
      searchResults: [],
      searchQuery: e.target.search.value.trim().toLowerCase(),
      page: 1,
    });
    e.target.reset();
  };

  handleLoadMore = () =>
    this.setState({
      isLoading: true,
      page: this.state.page + 1,
    });

  openModal = e => {
    this.setState({
      isModalOpen: true,
      largeImageURL: e.target.dataset.largeimageurl,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      largeImageURL: '',
    });
  };

  render() {
    const { searchResults, isLoading, totalHits, isModalOpen, largeImageURL } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {totalHits !== 0 ? (
          <>
            <ImageGallery>
              <GalleryItem
                searchResults={searchResults}
                onClick={this.openModal}
              />
            </ImageGallery>
            {isLoading && <Loader />}
          </>
        ) : (
          <p className="info">Oops... Nothing found :(</p>
        )}
        {searchResults.length >= 12 && <Button onClick={this.handleLoadMore} />}
        {isModalOpen && (
          <Modal closeModal={this.closeModal} largeImageURL={largeImageURL} />
        )}
      </>
    );
  }
}
