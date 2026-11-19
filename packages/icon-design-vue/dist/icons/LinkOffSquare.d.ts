import type { DefineComponent } from 'vue';

export interface LinkOffSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkOffSquare: DefineComponent<LinkOffSquareProps>;

export default LinkOffSquare;
export { LinkOffSquare };
