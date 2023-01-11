import { ColorRing } from 'react-loader-spinner';

const Loader = () => (
  <ColorRing
    visible={true}
    height="150"
    width="150"
    ariaLabel="blocks-loading"
    wrapperStyle={{ display: 'block', margin: '-40px auto 0' }}
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
);

export default Loader;
