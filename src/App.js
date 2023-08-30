import './App.css';
import VideoList from "./VideoList";
import Home from "./Home";
import video_data from './static/all_video_data.json';
import { Route, Routes, useLocation} from "react-router-dom";



const watch_videos = [video_data[0], video_data[1], video_data[2], video_data[3], video_data[4], video_data[5], video_data[6], video_data[7]];

const scroll_videos = video_data.slice(8);

/* Randomize array in-place using Durstenfeld shuffle algorithm */
/* https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }
// }

// shuffleArray(watch_videos);
// shuffleArray(scroll_videos);

const watch_videos1 = watch_videos.slice(0, watch_videos.length / 2);
const watch_videos2 = watch_videos.slice(watch_videos.length / 2);
const scroll_videos1 = scroll_videos.slice(0, scroll_videos.length / 2);
const scroll_videos2 = scroll_videos.slice(scroll_videos.length / 2);


function App() {
  const location = useLocation();

  return (
    <div>
      <Routes location={location} key={location.pathname} >
          
            <Route index element={<Home />} />
            <Route path="tutorial" element={<VideoList videos={watch_videos1} BASELINE={true}/>} />
            <Route path="task-1" element={<VideoList videos={watch_videos1} BASELINE={true} />} />
            <Route path="task-2" element={<VideoList videos={scroll_videos1} BASELINE={true} />} />
            <Route path="task-3" element={<VideoList videos={watch_videos2} BASELINE={false} />} />
            <Route path="task-4" element={<VideoList videos={scroll_videos2} BASELINE={false} />} />
          
          {/*<Route path="*" element={<PageNotFound />*/}
      </Routes>
    </div>
  );
}

export default App;
