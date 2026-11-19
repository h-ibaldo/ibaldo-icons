import type { DefineComponent } from 'vue';

export interface FastForwardSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FastForwardSquare: DefineComponent<FastForwardSquareProps>;

export default FastForwardSquare;
export { FastForwardSquare };
