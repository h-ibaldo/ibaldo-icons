import type { DefineComponent } from 'vue';

export interface HandThumbDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandThumbDown: DefineComponent<HandThumbDownProps>;

export default HandThumbDown;
export { HandThumbDown };
