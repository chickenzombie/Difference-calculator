import plainFormat from './plain.js';
import stylishFormat from './stylish.js';

const format = (data, typeOfFormat) => {
  switch (typeOfFormat) {
    case 'stylish':
      return stylishFormat(data);
    case 'plain':
      return plainFormat(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`${typeOfFormat} is not defined`);
  }
};

export default format;
