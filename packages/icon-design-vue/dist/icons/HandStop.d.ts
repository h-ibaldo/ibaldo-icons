import type { DefineComponent } from 'vue';

export interface HandStopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandStop: DefineComponent<HandStopProps>;

export default HandStop;
export { HandStop };
