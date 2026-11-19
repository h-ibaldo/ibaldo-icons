import type { DefineComponent } from 'vue';

export interface WindowKeyholeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowKeyhole: DefineComponent<WindowKeyholeProps>;

export default WindowKeyhole;
export { WindowKeyhole };
