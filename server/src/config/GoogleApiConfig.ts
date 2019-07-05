export const googleApiConfig = {
  endpoint: 'https://vision.googleapis.com/v1/images:annotate?key=',
  apiKey: 'AIzaSyAeFRJdyqTAN6EPb22O0IH17oRPbTPrC9w',
  body: {
    requests:[
      {
        image:{
          content: ''
        },
        features:{
          type: '',
          maxResults: 0
        }
      }
    ]
  }
}
