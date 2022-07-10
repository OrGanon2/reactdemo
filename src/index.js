import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StudentListComp } from './StudentComp';
import { GetYouTubeVideos } from './YouTubeVideoListcomp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<StudentListComp />,
  <GetYouTubeVideos />
  </>
  
);

