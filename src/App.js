import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import PostcardPage from './components/PostcardPage';
import GalleryPage from './components/GalleryPage';
import './App.css';
import Nitya from "./Photos/Nitya Photo.jpg";
import Meera from "./Photos/Meera Photo.jpg";
import Akhil from "./Photos/Akhil Photo.jpg";
import Amisha from "./Photos/Amisha Photo.jpg";
import Devasya from "./Photos/Devasya Photo.jpg";
import Khushi from "./Photos/Khushi Photo.jpg";
import Sanya from "./Photos/Sanya Photo.jpg";
import Saairah from "./Photos/Saairah Photo.jpg";
import Soubhagya from "./Photos/Soubhagya photo.jpg";
import Uday from "./Photos/Uday Photo.jpg";
import Vanshika from "./Photos/Vlan Photo.jpg";
import Gallery1 from "./Gallery/1.jpg"
import Gallery2 from "./Gallery/2.jpg"
import Gallery3 from "./Gallery/3.jpg"
import Gallery4 from "./Gallery/4.jpg"
import Gallery5 from "./Gallery/5.jpg"
import Gallery6 from "./Gallery/6.jpg"
import Gallery7 from "./Gallery/7.jpg"
import Gallery8 from "./Gallery/8.jpg"
import Gallery9 from "./Gallery/9.jpg"
import Gallery10 from "./Gallery/10.jpg"
import MessagesPage from './components/MessagesPage';

const postcards = [
  { name: 'Nitya', image: Nitya, text: 'Wait I change my answer to this' },
  { name: 'Meera', image: Meera, text: 'Happy birthday my twininem!! no one else I’d rather walk around campus aimlessly with. I’m so glad I met you love you loads. Big 20!! Cheers to our favourite bulldog❤' },
  { name: 'Akhil', image: Akhil, text: 'Uday is the best director ever' },
  { name: 'Amisha', image: Amisha, text: 'My gulab jamun supplier, I’ll always be there for u no matter what. Love u bulldog' },
  { name: 'Devasya', image: Devasya, text: 'Crazy foto' },
  { name: 'Khushi', image: Khushi, text: 'Happiest 20th Riya💗💗💗 I hope you never doubt what a gem of a person you are because lord knows you made college easier' },
  { name: 'Sanya', image: Sanya, text: 'You deserve the world and more <3 hope that we can make you feel as special as you make us feel ❤' },
  { name: 'Saairah', image: Saairah, text: 'Hello Riya!!! Happy happy birthday, you were the one person with whom my friendship was so unexpected but I’m so glad that it happened because I really found in you a friend I can always rely on. I miss you very very much — I miss hanging out with you every day and getting calls from you to hear about everything that’s going on and I miss our Taylor Swift jam sessions. You are truly such a gem to have around with your contagious laughter. Wishing you the happiest happiest 20th birthday and I hope this year brings everything you’ve ever wanted. I love you always!!!' },
  { name: 'Soubhagya', image: Soubhagya, text: 'Happy birthday Riya' },
  { name: 'Uday', image: Uday, text: "Happy birthday Riri to our movie nights, my cadi infractions, cooking dates, your anger when we study together, your love when we eat together, your affection when I don't even ask for it. It's been 2 years since I know you and 0 that we've spent to our potential. So let's make the next 20 special. Love you" },
  { name: 'Vanshika', image: Vanshika, text: 'I think this photo captures us the best' },
];

const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
];



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/postcards" element={<PostcardPage postcards={postcards} />} />
          <Route path="/" element={<VideoSection />} />
          <Route path="/messages" element={<MessagesPage/>} />
          <Route path="/gallery" element={<GalleryPage images={galleryImages} />} /> {/* Gallery route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
