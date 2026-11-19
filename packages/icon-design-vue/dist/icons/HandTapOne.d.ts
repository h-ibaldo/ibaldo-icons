import type { DefineComponent } from 'vue';

export interface HandTapOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandTapOne: DefineComponent<HandTapOneProps>;

export default HandTapOne;
export { HandTapOne };
