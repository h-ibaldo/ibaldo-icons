import type { DefineComponent } from 'vue';

export interface LinkBrokenSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBrokenSquare: DefineComponent<LinkBrokenSquareProps>;

export default LinkBrokenSquare;
export { LinkBrokenSquare };
