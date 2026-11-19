import type { DefineComponent } from 'vue';

export interface SaveLabelStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveLabelStack: DefineComponent<SaveLabelStackProps>;

export default SaveLabelStack;
export { SaveLabelStack };
