import type { DefineComponent } from 'vue';

export interface PowerOffSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PowerOffSquare: DefineComponent<PowerOffSquareProps>;

export default PowerOffSquare;
export { PowerOffSquare };
