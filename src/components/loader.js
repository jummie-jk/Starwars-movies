import React from 'react';
import { PropagateLoader } from 'react-spinners';

function Loader() {
  return (
    <div id="loading">
      <PropagateLoader color="yellow" size={25} margin={0} loading={true} />
    </div>
  );
}

export default Loader;