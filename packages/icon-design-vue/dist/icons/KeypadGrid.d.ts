import type { DefineComponent } from 'vue';

export interface KeypadGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeypadGrid: DefineComponent<KeypadGridProps>;

export default KeypadGrid;
export { KeypadGrid };
