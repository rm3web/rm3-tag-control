import config from './config';
import Tags from './components/tags';
import TagInput from './components/taginput';

export function setConfig(newConfig) {
  Object.assign(config, newConfig);
}

export { config as config };

export { TagInput as TagInput };

export { Tags as Tags };
