import type { DefineComponent } from 'vue';

export interface SkipForwardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipForward: DefineComponent<SkipForwardProps>;

export default SkipForward;
export { SkipForward };
