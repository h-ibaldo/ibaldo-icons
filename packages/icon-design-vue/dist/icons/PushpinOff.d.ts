import type { DefineComponent } from 'vue';

export interface PushpinOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PushpinOff: DefineComponent<PushpinOffProps>;

export default PushpinOff;
export { PushpinOff };
