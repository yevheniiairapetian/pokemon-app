import React, { useState } from 'react';
import $ from 'jquery';
import logo from './img/logo.png';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import question from './img/question.png'


export const PokemonView = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  // const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
 
  // created an array of objects: array is a list of pokemons, 
  // each object is a pokemon with respective properties. 
  //add the IIFE containing the pokemonList array
  $(document).ready(function () {
    $('.sp').addClass('sp-none');
  });




  // $(function () {
  //     $('[data-toggle="tooltip"]').tooltip()
  // })

  let pokemonRepository = (function () {
    let pokemonList = [];

    // a promise URL

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1281';

    // this function add an item to the array of pokemons checking
    // the type of entry

    function add(pokemon) {
      // 
      if (typeof pokemon === 'object' &&
        'name' in pokemon) {
        return pokemonList.push(pokemon);
      } else {
        return 'Not allowed'
      }

    }

    //this function returns the array of pokemons

    function getAll() {

      return pokemonList;
    }


    function loadList() {


      return fetch(apiUrl).then(function (response) {

        return response.json();

      }).then(function (json) {

        json.results.forEach(function (item) {

          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            id: item.id,
            // gender:item.gender.name,



          };


          add(pokemon);

        });
      }).catch(function (e) {


        console.error(e);

      })
    }

    function loadDetails(item) {

      let url = item.detailsUrl;

      return fetch(url).then(function (response) {

        return response.json();
      }).then(function (details) {

        // Now we add the details to the item
        item.id = details.id;
        item.imageUrl = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        // item.gender = details.gender.name;
        showModal(item);

      }).catch(function (e) {
        console.error(e);
      });
    }


    //creates a list of pokemons and shows them when clicked

    function addListItem(pokemon) {
      let pokemonListContainer = document.querySelector('.list-group');
      let pokemonListItem = document.createElement('li');
      pokemonListItem.classList.add('list-group-item', 'pokemon-item', 'm-2', 'bg-light', 'p-3');
      let button = document.createElement('button');
      button.classList.add('btn', 'primary-btn', 'pokemon-button', 'w-100', 'p-3', 'text-light', 'border-primary', 'rounded', 'bg-primary');
      button.innerText = pokemon.name.toUpperCase();
      // button.classList.add('default-button');
      pokemonListContainer.appendChild(pokemonListItem);
      pokemonListItem.appendChild(button);
      // button.attr('data-target', '#my-modal');
      // button.attr('data-toggle', 'modal');

      button.addEventListener('click', function () {

        loadDetails(pokemon);
        openModal();
      })


    }





    function showDetails(pokemon) {
      // loadDetails(pokemon);
      // .then(function () {

      showModal(pokemon);
      // })

    }
    //function for showing the modal windows with the pokemon fetched results
    function showModal(pokemon) {
      let modalTitle = document.querySelector('.modal-title');
      // modalTitle.empty();
      // let modalPokemonName = pokemon.name;

      modalTitle.innerText = pokemon.name.toUpperCase() + '\'s Stats';
      let modalID = document.querySelector('.modal-ID');

      modalID.innerText = pokemon.name.toUpperCase() + '\'s ID: ' + pokemon.id;

      let modalImage = document.querySelector('.modal-image');
      // modalImage.empty();
      modalImage.setAttribute('src', pokemon.imageUrl ? pokemon.imageUrl : question);
      // let modalGender = $(".modal-gender");
      // modalGender.text('Gender: ' + pokemon.gender);
      let modalImageBack = document.querySelector('.modal-image-back');
      // modalImageBack.empty();
      modalImageBack.setAttribute('src', pokemon.imageUrlBack ? pokemon.imageUrlBack : question);
      let modalText = document.querySelector('.modal-text');
      // modalText.text(pokemon.height)
      modalText.innerText = 'Height: ' + pokemon.height / 10 + ' m'; //

      let modalAbilities = document.querySelector('.modal-abilities');
      modalAbilities.innerText = 'Weight: ' + (pokemon.weight / 10) + 'kg';

    }

    $(document).ready(function () {
      $('.form-control').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('.list-group li').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

      });
    });








    // this return statement returns the object with methods
    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      showModal: showModal,
      loadDetails: loadDetails,
      addListItem: addListItem,
      showDetails: showDetails,

    };

  })();

  // a forEach function to iterate through the Pokemon list and print their values

  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  })
  return (
    <>




      <Navbar expanded={expanded} className="page-header" expand="xl" id="navigation">
        <Container className="navigation">
          <Navbar.Brand className="p-2 brand" as={Link} to="/" expand="lg">

            <span className='navbar-brand col-8'>
              <Image onClick={() => setExpanded(false)} id='top' title='Click to reload the page' src={logo} alt='An image showing a pokemon ball' /><span className='logo-name'>Pokemon App</span>

              </span><br />
          </Navbar.Brand>
          <Navbar.Toggle id="tgl" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
            <form className='form-inline my-2 my-lg-0 col-12' aria-label='Search section'>
                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'
                      // data-toggle='tooltip' 
                      // data-placement='top' 
                      title='Type in the Pokemon to search' placeholder='Enter Pokemon&#39;s Name' id='inputGroup-sizing-default'>Search</span>
                  </div>
                  <input type='text' className='form-control mr-sm-2'
                    // data-toggle='tooltip' 
                    // data-placement='top' 
                    title='Type in the Pokemon to search' placeholder='Enter Pokemon&#39;s Name' aria-label='Default'
                    aria-describedby='inputGroup-sizing-default' />
                </div>
              </form>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>


      <main className='container-fluid'>
        <div className='sp d-flex mb-4 mt-4 justify-content-center'>
          <div className='spinner-grow text-danger' role='status'>

          </div>

          <span className='text-white'>Hold On...</span>
        </div>
        <div className='jumbotron jumbotron-fluid bg-dark'>
          <div className='container text-light'>
            <h1 className='display-4 text-white'>Welcome!</h1>
            <p className='lead'>The <span className='jumbo-app-name'>Pokemon App</span> displays Pokemon information. You can find 1281 Pokemon here!</p>
            <hr className='my-4 bg-light' />
            <p>Click or tap on the <span className='jumbo-pokemon-button'>Pokemon button</span> to see the details. Use the app's real-time search to search for a Pokemon
              of your choice.</p>
          </div>
        </div>
        <ul className='list-group d-flex flex-row flex-wrap justify-content-center'></ul>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)', },
            content: { color: 'lightsteelblue', backgroundColor: '#343a40', top: '60%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
          }} >

          <h5 className='modal-title'>

          </h5>
          <button onClick={closeModal} type='button' className='close' data-dismiss='modal' aria-label='Close'>
            <span aria-hidden='true' className='text-white'

              title='Click to close'>&times;</span>
          </button>
          <hr style={{ color: 'white' }} />
          <p id="modalID" className='modal-ID text-center'></p>

          <p className='modal-text text-center'></p>

          <p className='modal-abilities text-center'></p>

          <img src="" className='modal-image float-left' alt='An image showing a Pokemon from the front' />
          <img src="" className='modal-image-back float-right' alt='An image showing a Pokemon from the back ' />

          <hr style={{ color: 'white' }} />
          <button className="close-btn btn btn-secondary" onClick={closeModal}>Close</button>
        </Modal>

      </main>
      <button
        //   data-toggle='tooltip' 
        //   data-placement='left' 
        title='Back to top'
        type='button'
        className='btn btn-dark btn-floating btn-lg'
        id='btn-back-to-top'
      >
        <i>&#8593;</i>
      </button>
      <footer className='bg-dark pt-4 pb-4 text-light text-center text-lg-start'>
        <div className='text-center p-3 text-light'>
          <p className='mb-3'>Pokemon App, 2024</p>
          <a className='text-light' target='_blank' href='https://icons8.com/'>Icons used with permission of icons8.com</a>
          <p className='mt-3'>
            <a href='https://www.linkedin.com/in/yevheniiairapetian/' target='_blank'><svg title='Visit LinkedIn'
              // data-toggle='tooltip' 
              // data-placement='left' 
              height='24' className='mr-2 mt-2 github' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='#dfbb07' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' /></svg></a>

            <a href='https://github.com/yevheniiairapetian' target='_blank'><svg title='Visit Github'
              // data-toggle='tooltip' 
              // data-placement='bottom' 
              className='mr-2 mt-2 github' height='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path fill='#dfbb07' d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' /></svg></a>
            <a href='https://yevheniiairapetian.com/' target='_blank'><svg title='Visit Portfolio'
              // data-toggle='tooltip' 
              // data-placement='right'
              className='github mt-2' height='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#dfbb07' d='M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z' /></svg></a>

          </p>
        </div>

      </footer>
    </>
  )
}