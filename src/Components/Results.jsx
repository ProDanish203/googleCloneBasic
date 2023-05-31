import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import { useResultContext } from "../Context/ResultProvider";
import { Loading } from "./Loading";

export const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {

    // getResults('/?query=Javascript&limit=30');
    
    if(searchTerm !== ""){
      if(location.pathname === '/search'){
        getResults(`/search/?q=${searchTerm}&gl=us&lr=lang_en&num=10&start=0`);
      }
      else if(location.pathname === '/imagesearch'){
        getResults(`/imagesearch/?q=${searchTerm}&gl=us&lr=lang_en&num=10&start=0`);
      }
    }


  }, [searchTerm, location.pathname])

  if(isLoading) return <Loading/>

  if(location.pathname == "/search"){
    return (
      <div className='p-3 sm:p-5 flex flex-col justify-center gap-5'>
        {
          results ? (
            <>
            {
              results?.map((link, i) => (
                <div key={i}>
                    <a href={link.link} target='_blank' className="link text-[20px]">{link.title}</a>
                    <p className='text-mg text-gray-500 text-[16px] max-w-[550px]'>{link.snippet}</p>
                </div>
              ))
            }  
            </>  
          ) : (
            <h2>No results</h2>
          )
      }
      </div>
    );
  }
  else if(location.pathname == "/imagesearch"){
    return (
      <>
      <div className="image-container">
        {results ? (
            <>
            {
              results?.map((link, i) => (
                <div className='rounded-md'>
                  <a href={link.originalImageUrl}>
                    <img src={link.originalImageUrl} alt={link.title} className='rounded-md w-[100%] h-[200px] object-cover cursor-pointer' loading='lazy' />
    
                  </a>
                </div>            
              ))
            }  
            </>
          ) : (
            <>
            <h2>No Results</h2>
            </>
          )
        }
      </div>
      </>
    );
  }
  else{
    return "Error"
  }

}
