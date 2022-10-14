import plainFormat from './plain.js';
import stylishFormat from './stylish.js';

const format = (data, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return stylishFormat(data);
    case 'plain':
      return plainFormat(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`${outputFormat} is not defined`);
  }
};

export default format;
