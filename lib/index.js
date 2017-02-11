import config from './config';
import Tags from './components/tags';
import TagInput from './components/taginput';
import Properties from './components/properties';

export function setConfig(newConfig) {
  Object.assign(config, newConfig);
}

export { config as config };

export { TagInput as TagInput };

export { Tags as Tags };

export { Properties as Properties };
