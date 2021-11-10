
  import {Quadstore} from 'quadstore'
  import * as dataFactory from '@rdfjs/data-model'
  import leveljs from 'level-js'
  import {newEngine} from 'quadstore-comunica';

  const store = new Quadstore({
    dataFactory,
    backend: leveljs('quadstore'),
    comunica: newEngine(), 
  });

  export default store;

     