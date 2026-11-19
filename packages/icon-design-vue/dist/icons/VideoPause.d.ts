import type { DefineComponent } from 'vue';

export interface VideoPauseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoPause: DefineComponent<VideoPauseProps>;

export default VideoPause;
export { VideoPause };
