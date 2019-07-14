import React from 'react';
import Page from './page.jsx';

class PageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render (){
    var { pages, handlePageChange } = this.props;
    return (
      <div className='all-pages'>
        {
        pages.map((page, index) => {
          return (
            <Page value={page} key={index} handlePageChange={handlePageChange}/>
          )
          })
        }
      </div>
    )
  }
}

export default PageList;