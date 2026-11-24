import type { DefineComponent } from 'vue';

export interface FastForwardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FastForward: DefineComponent<FastForwardProps>;

export default FastForward;
export { FastForward };
