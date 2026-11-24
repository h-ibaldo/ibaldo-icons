import type { DefineComponent } from 'vue';

export interface SavePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SavePlus: DefineComponent<SavePlusProps>;

export default SavePlus;
export { SavePlus };
