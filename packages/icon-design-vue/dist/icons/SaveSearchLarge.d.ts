import type { DefineComponent } from 'vue';

export interface SaveSearchLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveSearchLarge: DefineComponent<SaveSearchLargeProps>;

export default SaveSearchLarge;
export { SaveSearchLarge };
