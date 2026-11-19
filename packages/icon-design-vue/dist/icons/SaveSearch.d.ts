import type { DefineComponent } from 'vue';

export interface SaveSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveSearch: DefineComponent<SaveSearchProps>;

export default SaveSearch;
export { SaveSearch };
