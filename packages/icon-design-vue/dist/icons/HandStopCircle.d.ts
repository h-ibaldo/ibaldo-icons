import type { DefineComponent } from 'vue';

export interface HandStopCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandStopCircle: DefineComponent<HandStopCircleProps>;

export default HandStopCircle;
export { HandStopCircle };
