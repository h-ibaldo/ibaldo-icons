import type { DefineComponent } from 'vue';

export interface ShareSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ShareSquare: DefineComponent<ShareSquareProps>;

export default ShareSquare;
export { ShareSquare };
