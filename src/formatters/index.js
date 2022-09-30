import plainFormat from './plain.js';
import stylishFormat from './stylish.js';

const selectFormat = (data, typeOfFormat) => {
  switch (typeOfFormat) {
    case 'stylish':
      return stylishFormat(data);
    case 'plain':
      return plainFormat(data);
    default:
      throw new Error(`${typeOfFormat} is not defined`);
  }
};

export default selectFormat;
