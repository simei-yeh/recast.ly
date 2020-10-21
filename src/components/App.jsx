
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //placeholder videolists for event handler
      allVideos: [{
        kind: 'youtube#searchResult',
        etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
        id: {
          kind: 'youtube#video',
          videoId: '4ZAEBxGipoA'
        },
        snippet: {
          publishedAt: '2015-08-02T20:52:58.000Z',
          channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
          title: 'React JS Tutorial for Beginners - 1 - Introduction',
          description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
              width: 480,
              height: 360
            }
          },
          channelTitle: 'thenewboston',
          liveBroadcastContent: 'none'
        }
      }],
      currentVideo: {
        kind: 'youtube#searchResult',
        etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
        id: {
          kind: 'youtube#video',
          videoId: '4ZAEBxGipoA'
        },
        snippet: {
          publishedAt: '2015-08-02T20:52:58.000Z',
          channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
          title: 'React JS Tutorial for Beginners - 1 - Introduction',
          description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
              width: 480,
              height: 360
            }
          },
          channelTitle: 'thenewboston',
          liveBroadcastContent: 'none'
        }
      },
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


  // make a function that gets you tube videos
  // Search constructor provides params details
  getYouTubeVideos(query) {
    // takes in searchVid object and calls youtubeSearch in searchYouTube.js
    var options = {
      key: this.props.APIKey,
      query: query,
    };
    //console.log('yo', this.props);
    this.props.searchYouTube(options, (data) => {
      this.setState({
        allVideos: data.items,
        currentVideo: this.state.allVideos[0]
      });
    });
    // youtubeSearch runs ajax GET request
  }

  componentDidMount() {
    // Give search details into getYouTubeVideos fn
    console.log('component mount invocation');
    this.getYouTubeVideos('cats');
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
