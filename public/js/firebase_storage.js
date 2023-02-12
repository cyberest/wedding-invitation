// Getting link to image uploaded in Storage
// https://firebase.google.com/docs/storage/web/create-reference

import { storage } from "./firebase_init.js"
import { ref } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js";

// Create a storage reference from our storage service
// (root of your Cloud Storage bucket)
const storageRef = ref(storage);

// Create a child reference
const imagesRef = ref(storage, 'images');
// imagesRef now points to 'images'

// Child references can also take paths delimited by '/'
const spaceRef = ref(storage, 'images/gallery/f01.jpg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"

// Reference's path is: 'images/space.jpg'
// This is analogous to a file path on disk
console.log(spaceRef.fullPath);

// Reference's name is the last segment of the full path: 'space.jpg'
// This is analogous to the file name
console.log(spaceRef.name);