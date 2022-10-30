import yaml from 'js-yaml';

const getParse = (data, datatype) => {
  switch (datatype) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.load(data);
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown data type: ${datatype}!`);
  }
};

export default getParse;
