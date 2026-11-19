import type { DefineComponent } from 'vue';

export interface FullscreenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Fullscreen: DefineComponent<FullscreenProps>;

export default Fullscreen;
export { Fullscreen };
