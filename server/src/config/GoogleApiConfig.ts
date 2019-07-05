export const googleApiConfig = {
  endpoint: 'https://vision.googleapis.com/v1/images:annotate?key=',
  apiKey: '----- Google API-Key ----',
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
