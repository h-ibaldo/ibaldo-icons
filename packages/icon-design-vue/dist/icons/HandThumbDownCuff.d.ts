import type { DefineComponent } from 'vue';

export interface HandThumbDownCuffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandThumbDownCuff: DefineComponent<HandThumbDownCuffProps>;

export default HandThumbDownCuff;
export { HandThumbDownCuff };
