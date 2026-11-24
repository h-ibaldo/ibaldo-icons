import type { DefineComponent } from 'vue';

export interface SaveEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveEdit: DefineComponent<SaveEditProps>;

export default SaveEdit;
export { SaveEdit };
