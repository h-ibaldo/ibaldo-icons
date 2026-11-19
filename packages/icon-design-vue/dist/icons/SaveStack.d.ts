import type { DefineComponent } from 'vue';

export interface SaveStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveStack: DefineComponent<SaveStackProps>;

export default SaveStack;
export { SaveStack };
