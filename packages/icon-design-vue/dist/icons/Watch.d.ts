import type { DefineComponent } from 'vue';

export interface WatchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Watch: DefineComponent<WatchProps>;

export default Watch;
export { Watch };
