import React from 'react';
import Page from './pageListSubComponents/page.jsx';
import NextPage from './pageListSubComponents/nextPage.jsx';
import PreviousPage from './pageListSubComponents/previousPage.jsx'

class PageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render (){
    var { pages, handlePageChange, handleClickNextPage, currentPage, handleClickPreviousPage } = this.props;
    var next, previous;
    console.log('pages length ', pages.length)
    console.log('current page ', currentPage)
    if ((currentPage !== pages.length) && (pages.length !== 1)){
      console.log('inside')
      next = <NextPage handleClickNextPage={handleClickNextPage} currentPage={currentPage}/>;
    }
    if ((currentPage !== 1) && (pages.length !== 1)){
      previous = <PreviousPage handleClickPreviousPage={handleClickPreviousPage} currentPage={currentPage}/>;
    };

    return (
      <div className='all-pages'>
        {previous}
        {
        pages.map((page, index) => {
          console.log('Page CurrentPage ', page, currentPage)
            return (
              <Page value={page} key={index} handlePageChange={handlePageChange} currentPage={currentPage}/>
            )
        
          })
        }
        {next}
      </div>
    )
  }
}

export default PageList;