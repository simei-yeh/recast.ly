import YOUTUBE_API_KEY from '../config/youtube.js';

// input: Object containing three properties(query, max, key)
// callback: push data from ajax get request into data model file tbd

var searchYouTube = (options, callback, errorCB) => {
  // TODO

  var params = {
    key: options.key || YOUTUBE_API_KEY,
    q: options.query || 'react',
    part: 'snippet',
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: true,
  };
  console.log(params);
  //youtube HTTP search:list request

  //var server = 'https://www.googleapis.com/youtube/v3/search',

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: params,
    contentType: 'application/json',
    success: callback || function(data) {
      console.log('successData', data.items);
    },
    error: errorCB || function (error) {
      console.error('Failed to fetch messages', error);
    }
  });


};

export default searchYouTube;
