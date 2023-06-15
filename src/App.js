import './App.css';
import Video from "./Video";

const videos = ["videos/00.MP4", 
                "videos/01.MP4",
                "videos/02.MP4", 
                "videos/03.MP4", 
                "videos/04.MP4", 
                "videos/05.MP4"]

const users = ["user00",
                "user01", 
                "user02", 
                "user03", 
                "user04", 
                "user05"]

const captions = ["caption00",
                "caption01", 
                "caption02", 
                "caption03", 
                "caption04", 
                "caption05"]

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
      <Video url = {videos[0]} user = {users[0]} caption = {captions[0]}/>
      <Video url = {videos[1]} user = {users[1]} caption = {captions[1]}/>
      <Video url = {videos[2]} user = {users[2]} caption = {captions[2]}/>
      <Video url = {videos[3]} user = {users[3]} caption = {captions[3]}/>
      <Video url = {videos[4]} user = {users[4]} caption = {captions[4]}/>
      <Video url = {videos[5]} user = {users[5]} caption = {captions[5]}/>
      </div>
    </div>
  );
}

export default App;
