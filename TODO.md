## Build a simple image search app with the new API

1. Vue.use(plugin);
2. import { value } from 'vue-function-api';
3. Create setup function
4. Create Form in template
5. Bind search input to value in script
6. Listen for submit on the form and set loading to true
7. Call API with search term
8. Set gifs value to be array of images
9. set loading to false
 
const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=JnxTmEGKXjZeUKBzRjTQoMDg8OX8pS5U&rating=pg&q=';

<img alt="loading" src="https://media2.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif?cid=790b76115d055ab7424f75514dcb4d7a&rid=giphy.gif" />