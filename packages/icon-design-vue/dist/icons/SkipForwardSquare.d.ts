import type { DefineComponent } from 'vue';

export interface SkipForwardSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipForwardSquare: DefineComponent<SkipForwardSquareProps>;

export default SkipForwardSquare;
export { SkipForwardSquare };
