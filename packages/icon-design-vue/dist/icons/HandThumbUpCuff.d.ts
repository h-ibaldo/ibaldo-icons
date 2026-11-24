import type { DefineComponent } from 'vue';

export interface HandThumbUpCuffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandThumbUpCuff: DefineComponent<HandThumbUpCuffProps>;

export default HandThumbUpCuff;
export { HandThumbUpCuff };
