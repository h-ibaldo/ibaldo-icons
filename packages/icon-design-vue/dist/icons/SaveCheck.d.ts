import type { DefineComponent } from 'vue';

export interface SaveCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveCheck: DefineComponent<SaveCheckProps>;

export default SaveCheck;
export { SaveCheck };
