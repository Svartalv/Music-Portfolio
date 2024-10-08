// src/plugins/font-awesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify, faSoundcloud, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSpotify, faSoundcloud, faInstagram);

export default FontAwesomeIcon;
