import type { DefineComponent } from 'vue';

export interface SwatchStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwatchStack: DefineComponent<SwatchStackProps>;

export default SwatchStack;
export { SwatchStack };
