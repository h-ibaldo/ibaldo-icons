import type { DefineComponent } from 'vue';

export interface SaveLabelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveLabel: DefineComponent<SaveLabelProps>;

export default SaveLabel;
export { SaveLabel };
