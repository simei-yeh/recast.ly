
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //placeholder videolists for event handler
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      done: false
    };
  }
  //event handler
  // change state.currentVideo to video that is clicked
  onVideoEntryClick(vid) {

    this.setState({
      // grab index to selected video in exampleVideoData array
      currentVideo: vid
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.allVideos} onClick={this.onVideoEntryClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer video={exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
