import React, { useState } from 'react';
import MovieCard from './MovieCard';
import SeatBooking from './SeatBooking';
import './Home.css';

const movies = [
  {
    title: 'Devara: Part - 1',
    year: 2024,
    description: 'Devara: Part 1 is visually stunning but narratively underwhelming. Jr NTR’s solid performance, combined with high production values and Anirudh’s score, makes it worth watching.',
    image: 'https://timesofindia.indiatimes.com/thumb.cms?msid=113734788&width=137&height=195',
  },
  {
    title: 'Prasanna Vadanam',
    year: 2024,
    description: 'The film delivers a fresh and engaging experience, packed with enough twists and emotional depth to satisfy cinematic enthusiasts looking for something beyond the mainstream',
    image: 'https://static.toiimg.com/thumb/msid-109680791,width-219,height-317,imgsize-12592/109680791.jpg',
  },
  {
    title: 'Om Bheem Bush',
    year: 2024,
    description: 'The film is a vibrant testament to Telugu cinema inventive spirit. Despite its narrative and pacing imperfections, the film stands out for its engaging storyline and the dynamic performances of the lead trio.',
    image: 'https://timesofindia.indiatimes.com/thumb.cms?msid=108707484&width=137&height=195',
  },
  {
    title: 'Hanuman',
    year: 2024,
    description: 'Set in the fictional Anjanadri, a backward, undeveloped yet pristine village, the plot centres around Hanumanthu (Teja Sajja). The story begins with Michael (Vinay Rai), whose childhood desire for superpowers, influenced by superhero films and cartoons, sets the stage for the film events',
    image: 'https://timesofindia.indiatimes.com/thumb.cms?msid=106740731&width=137&height=195',
  },
  {
    title: 'Tillu Square',
    year: 2024,
    description: 'The film is a captivating entertainer, guaranteeing smiles and leaving the audience elated and satisfied. It’s a must-watch for anyone seeking two hours of fun-filled entertainment.',
    image: 'https://static.toiimg.com/thumb/msid-97581675,width-219,height-317,imgsize-19788/97581675.jpg',
  },
  {
    title: 'Mathu Vadalara 2',
    year: 2024,
    description: 'Mathu Vadalara 2 is an entertaining watch, especially for fans of the first film and younger audiences who enjoy quirky comedies with elements of satire.',
    image: 'https://static.toiimg.com/thumb/msid-113257479,width-219,height-317,imgsize-36582/113257479.jpg',
  },
  {
    title: '35-Chinna Katha Kaadu',
    year: 2024,
    description: '35-Chinna Katha Kaadu is a Telugu movie released on 6 Sep, 2024. The movie is directed by NandaKishore Emani and featured Vishwadev Rachakonda, Arundev Pothula, K. Bhagyaraj and Nivetha Thomas as lead characters.Other popular actors who were roped in for 35-Chinna Katha Kaadu is and Priyadarshi Pullikonda',
    image: 'https://static.toiimg.com/thumb/msid-113096657,width-219,height-317,imgsize-137474/113096657.jpg',
  },
  {
    title: 'Gaami',
    year: 2024,
    description: 'Despite its length and narrative complexities, the film offers a visually stunning experience with strong performances and an innovative storyline.',
    image: 'https://static.toiimg.com/thumb/msid-107224739,width-219,height-317,imgsize-8618/107224739.jpg',
  },
  {
    title: 'Ambajipeta Marriage Band',
    year: 2024,
    description: 'The films rich narrative, grounded in the realities of village life, combined with strong performances and high production values, make it a must-watch for those seeking cinema that both entertains and enlightens.',
    image: 'https://static.toiimg.com/thumb/msid-104360165,width-219,height-317,imgsize-16044/104360165.jpg',
  },
  {
    title: 'Naa Saami Ranga',
    year: 2024,
    description: 'The films successful amalgamation of mass appeal, a compelling narrative, and emotional depth makes it a commendable watch, resonating well with its audience during the festive Sankranti season.',
    image: 'https://static.toiimg.com/thumb/msid-103244209,width-219,height-317,imgsize-23458/103244209.jpg',
  },
  {
    title: 'Janaka Aithe Ganaka',
    year: 2024,
    description: 'Janaka Aithe Ganaka had the potential to be a witty commentary on the societal pressures of parenthood but falls short of delivering on that promise.',
    image: 'https://static.toiimg.com/thumb/msid-114114694,width-219,height-317,imgsize-21070/114114694.jpg',
  },
  {
    title: 'Maa Nanna Super Hero',
    year: 2024,
    description: 'Maa Nanna Superhero is a decent family drama that touches on universal themes of love, sacrifice, and redemption.',
    image: 'https://static.toiimg.com/thumb/msid-114171233,width-219,height-317,imgsize-126447/114171233.jpg',
  },
  {
    title: 'Purushothamudu',
    year: 2024,
    description: 'Despite its conventional storyline, the film offers an entertaining experience, but only if you can overlook the clichéd commercial elements.',
    image: 'https://static.toiimg.com/thumb/msid-110142903,width-219,height-317,imgsize-16316/110142903.jpg',
  },
  {
    title: 'Pekamedalu',
    year: 2024,
    description: 'Overall, Pekamedalu is a good film, delivering a powerful message of womens empowerment and freedom.',
    image: 'https://static.toiimg.com/thumb/msid-111752188,width-219,height-317,imgsize-15648/111752188.jpg',
  },
  {
    title: 'Harom Hara',
    year: 2024,
    description: 'Watch it if you are looking for a mass action film and are not triggered by the violence and gore showcased in the film.',
    image: 'https://static.toiimg.com/thumb/msid-95212150,width-219,height-317,imgsize-12902/95212150.jpg',
  },
  {
    title: 'Music Shop Murthy',
    year: 2024,
    description: 'The films unconventional storyline, combined with stellar performances and strong technical execution, makes it an enjoyable watch.',
    image: 'https://static.toiimg.com/thumb/msid-110524553,width-219,height-317,imgsize-16074/110524553.jpg',
  },
  {
    title: 'Manamey',
    year: 2024,
    description: 'The film is a delightful blend of romance, comedy, and emotional drama. Despite its flaws, strong performances, visual appeal, and an engaging score make it a pleasant watch.',
    image: 'https://static.toiimg.com/thumb/msid-108434479,width-219,height-317,imgsize-10872/108434479.jpg',
  },
  {
    title: 'Bhaje Vaayu Vegam',
    year: 2024,
    description: 'It is a decent entertainer that offers enough thrills and emotional moments to keep the audience invested.',
    image: 'https://static.toiimg.com/thumb/msid-109970470,width-219,height-317,imgsize-11422/109970470.jpg',
  },
  {
    title: 'Krishnamma',
    year: 2024,
    description: 'The film stands out for its strong character dynamics and solid performances. It may tread familiar ground, but it does so with enough competence and emotional depth.',
    image: 'https://static.toiimg.com/thumb/msid-92658539,width-219,height-317,imgsize-15038/92658539.jpg',
  },
  {
    title: 'Operation Valentine',
    year: 2024,
    description: 'It is a respectful nod to the bravery of the Indian Air Force, blending action, patriotism, and drama. A decent watch for its spirited portrayal of heroism and sacrifice in the face of adversity.',
    image: 'https://static.toiimg.com/thumb/msid-102889939,width-219,height-317,imgsize-13980/102889939.jpg',
  },

];

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="home">
      <h2>Available Movies</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            {...movie}
            onSelect={() => setSelectedMovie(movie)}
          />
        ))}
      </div>
      {selectedMovie && <SeatBooking movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
};

export default Home;
