import type { DefineComponent } from 'vue';

export interface HandTapDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandTapDouble: DefineComponent<HandTapDoubleProps>;

export default HandTapDouble;
export { HandTapDouble };
