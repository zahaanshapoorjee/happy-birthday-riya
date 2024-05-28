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
import Gallery1 from "./Gallery/1.jpg";
import Gallery2 from "./Gallery/2.jpg";
import Gallery3 from "./Gallery/3.jpg";
import Gallery4 from "./Gallery/4.jpg";
import Gallery5 from "./Gallery/5.jpg";
import Gallery6 from "./Gallery/6.jpg";
import Gallery7 from "./Gallery/7.jpg";
import Gallery8 from "./Gallery/8.jpg";
import Gallery9 from "./Gallery/9.jpg";
import Gallery10 from "./Gallery/10.jpg";
import Gallery11 from "./Gallery/11.jpg";
import Gallery12 from "./Gallery/12.jpg";
import Gallery13 from "./Gallery/13.jpg";
import Gallery14 from "./Gallery/14.jpg";
import Gallery15 from "./Gallery/15.jpg";
import Gallery16 from "./Gallery/16.jpg";
import Gallery17 from "./Gallery/17.jpg";
import Gallery18 from "./Gallery/18.jpg";
import Gallery19 from "./Gallery/19.jpg";
import Gallery20 from "./Gallery/20.jpg";
import Gallery21 from "./Gallery/21.jpg";
import Gallery22 from "./Gallery/22.jpg";
import Gallery23 from "./Gallery/23.jpg";
import Gallery24 from "./Gallery/24.jpg";
import Gallery25 from "./Gallery/25.jpg";
import Gallery26 from "./Gallery/26.jpg";
import Gallery27 from "./Gallery/27.jpg";
import Gallery28 from "./Gallery/28.jpg";
import Gallery29 from "./Gallery/29.jpg";
import Gallery30 from "./Gallery/30.jpg";
import Gallery31 from "./Gallery/31.jpg";
import Gallery32 from "./Gallery/32.jpg";
import Gallery33 from "./Gallery/33.jpg";
import Gallery34 from "./Gallery/34.jpg";
import Gallery35 from "./Gallery/35.jpg";
import Gallery36 from "./Gallery/36.jpg";
import Gallery37 from "./Gallery/37.jpg";
import Gallery38 from "./Gallery/38.jpg";
import Gallery39 from "./Gallery/39.jpg";
import Gallery40 from "./Gallery/40.jpg";
import Gallery41 from "./Gallery/41.jpg";
import Gallery42 from "./Gallery/42.jpg";
import Gallery43 from "./Gallery/43.jpg";
import Gallery44 from "./Gallery/44.jpg";
import Gallery45 from "./Gallery/45.jpg";
import Gallery46 from "./Gallery/46.jpg";
import Gallery47 from "./Gallery/47.jpg";
import Gallery48 from "./Gallery/48.jpg";
import Gallery49 from "./Gallery/49.jpg";
import MessagesPage from './components/MessagesPage';

const postcards = [
  { name: 'Uday', image: Uday, text: "Happy birthday Riri to our movie nights, my cadi infractions, cooking dates, your anger when we study together, your love when we eat together, your affection when I don't even ask for it. It's been 2 years since I know you and 0 that we've spent to our potential. So let's make the next 20 special. Love you" },
  { name: 'Nitya', image: Nitya, text: 'Wait I change my answer to this' },
  { name: 'Meera', image: Meera, text: 'Happy birthday my twininem!! no one else I’d rather walk around campus aimlessly with. I’m so glad I met you love you loads. Big 20!! Cheers to our favourite bulldog❤' },
  { name: 'Akhil', image: Akhil, text: 'Uday is the best director ever' },
  { name: 'Amisha', image: Amisha, text: 'My gulab jamun supplier, I’ll always be there for u no matter what. Love u bulldog' },
  { name: 'Devasya', image: Devasya, text: 'Crazy foto' },
  { name: 'Khushi', image: Khushi, text: 'Happiest 20th Riya💗💗💗 I hope you never doubt what a gem of a person you are because lord knows you made college easier' },
  { name: 'Sanya', image: Sanya, text: 'You deserve the world and more <3 hope that we can make you feel as special as you make us feel ❤' },
  { name: 'Saairah', image: Saairah, text: 'Hello Riya!!! Happy happy birthday, you were the one person with whom my friendship was so unexpected but I’m so glad that it happened because I really found in you a friend I can always rely on. I miss you very very much — I miss hanging out with you every day and getting calls from you to hear about everything that’s going on and I miss our Taylor Swift jam sessions. You are truly such a gem to have around with your contagious laughter. Wishing you the happiest happiest 20th birthday and I hope this year brings everything you’ve ever wanted. I love you always!!!' },
  { name: 'Soubhagya', image: Soubhagya, text: 'Happy birthday Riya' },
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
  Gallery11,
  Gallery12,
  Gallery13,
  Gallery14,
  Gallery15,
  Gallery16,
  Gallery17,
  Gallery18,
  Gallery19,
  Gallery20,
  Gallery21,
  Gallery22,
  Gallery23,
  Gallery24,
  Gallery25,
  Gallery26,
  Gallery27,
  Gallery28,
  Gallery29,
  Gallery30,
  Gallery31,
  Gallery32,
  Gallery33,
  Gallery34,
  Gallery35,
  Gallery36,
  Gallery37,
  Gallery38,
  Gallery39,
  Gallery40,
  Gallery41,
  Gallery42,
  Gallery43,
  Gallery44,
  Gallery45,
  Gallery46,
  Gallery47,
  Gallery48,
  Gallery49,
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/postcards" element={<PostcardPage postcards={postcards} />} />
          <Route path="/" element={<VideoSection />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/gallery" element={<GalleryPage images={galleryImages} />} /> {/* Gallery route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
