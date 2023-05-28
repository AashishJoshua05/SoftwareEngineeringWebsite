import React from "react";
// import axios from 'axios';
import Navbar from "../components/navbar";
import ClubElement from "../components/clubElement";

const club = {
    name: 'Example Club',
    description: 'Lorem ipsum dolor sit amet. Ut voluptatem aperiam sit esse voluptatem ut unde eligendi et consequatur molestias. Qui dolor atque qui consequatur officia eum omnis officia. In nulla recusandae est laboriosam dolor id quae sunt aut doloribus assumenda?',
    image: 'https://example.com/club-image.jpg',
    budget: '500'
  };



const ClubPage = (props) => {
    return (
        <div>
            <Navbar />
            <ClubElement club={club} isClubHead={true}/>
            {/* <Footer /> */}
        </div>
    )
}


export default ClubPage;