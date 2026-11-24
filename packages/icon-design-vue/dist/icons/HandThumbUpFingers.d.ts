import type { DefineComponent } from 'vue';

export interface HandThumbUpFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandThumbUpFingers: DefineComponent<HandThumbUpFingersProps>;

export default HandThumbUpFingers;
export { HandThumbUpFingers };
