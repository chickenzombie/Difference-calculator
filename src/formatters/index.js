import plainFormat from './plain.js';
import stylishFormat from './stylish.js';

const selectFormat = (data, typeOfFormat = 'stylish') => {
    switch (typeOfFormat) {
        case 'stylish':
            return stylishFormat(data);
        case 'plain':
            return plainFormat(data);
        default:
            throw new Error(`${type} is not defined`);            
    }
};

export default selectFormat;