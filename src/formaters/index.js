import stylish from './stylish.js';
import plain from './plain.js';

const selectFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`Unknown format: ${format}!`);
  }
};

export default selectFormat;
