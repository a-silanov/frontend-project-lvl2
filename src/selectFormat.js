import stylish from './formaters/stylish.js';

const selectFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    default:
      throw new Error(`Unknown format: ${format}!`);
  }
};

export default selectFormat;
