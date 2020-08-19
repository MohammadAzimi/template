import {getRequest} from '../ClientRequest';

//------ This type of coding is so muchCleaner ------//
const groupOneApiService = {
  getExample: () => getRequest({url: '/getUsers'}),
};

export {
  // eslint
  groupOneApiService,
};
