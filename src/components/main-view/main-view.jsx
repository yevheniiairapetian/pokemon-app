import { useEffect} from 'react';
import { Col } from 'react-bootstrap';
import '../../../src/App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ScrollToTop from './../scroll/scroll-to-top';
import { ScrollToTopButton } from '../scroll-to-top-button/scroll-to-top-button';
import { PokemonView } from '../pokemon-view/pokemon-view';

export const MainView = () => {

  useEffect(() => {
    // 👇️ Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  return (
    <>

      <Routes>

        <Route
          path="/"
          element={
            <>

              <Col>
                <PokemonView className="content"

                />


              </Col>
              <ScrollToTop />
              <ScrollToTopButton />

            </>
          }

        />

        
      </Routes>





    </>
  );
};



