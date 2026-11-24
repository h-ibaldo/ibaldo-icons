import type { DefineComponent } from 'vue';

export interface HandThumbDownFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandThumbDownFingers: DefineComponent<HandThumbDownFingersProps>;

export default HandThumbDownFingers;
export { HandThumbDownFingers };
