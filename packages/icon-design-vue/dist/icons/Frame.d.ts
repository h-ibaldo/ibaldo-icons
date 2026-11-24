import type { DefineComponent } from 'vue';

export interface FrameProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Frame: DefineComponent<FrameProps>;

export default Frame;
export { Frame };
