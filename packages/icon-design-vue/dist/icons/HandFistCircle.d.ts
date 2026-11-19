import type { DefineComponent } from 'vue';

export interface HandFistCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandFistCircle: DefineComponent<HandFistCircleProps>;

export default HandFistCircle;
export { HandFistCircle };
