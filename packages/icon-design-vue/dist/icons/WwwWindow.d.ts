import type { DefineComponent } from 'vue';

export interface WwwWindowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WwwWindow: DefineComponent<WwwWindowProps>;

export default WwwWindow;
export { WwwWindow };
