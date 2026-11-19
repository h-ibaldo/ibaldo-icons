import type { DefineComponent } from 'vue';

export interface CloudLinkDiagonalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLinkDiagonal: DefineComponent<CloudLinkDiagonalProps>;

export default CloudLinkDiagonal;
export { CloudLinkDiagonal };
