//CSS
import "./styles.css";
//Font Awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
//Modules
import {eventEmitter} from './modules/events/event-emitter';
import { project } from './modules/functions/projects'

eventEmitter();
project.displayProject();