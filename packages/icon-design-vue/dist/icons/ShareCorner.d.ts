import type { DefineComponent } from 'vue';

export interface ShareCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ShareCorner: DefineComponent<ShareCornerProps>;

export default ShareCorner;
export { ShareCorner };
