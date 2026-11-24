import type { DefineComponent } from 'vue';

export interface HandThumbUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandThumbUp: DefineComponent<HandThumbUpProps>;

export default HandThumbUp;
export { HandThumbUp };
