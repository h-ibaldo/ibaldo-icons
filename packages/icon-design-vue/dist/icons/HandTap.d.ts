import type { DefineComponent } from 'vue';

export interface HandTapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandTap: DefineComponent<HandTapProps>;

export default HandTap;
export { HandTap };
