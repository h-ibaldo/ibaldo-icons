import type { DefineComponent } from 'vue';

export interface PauseCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PauseCircle: DefineComponent<PauseCircleProps>;

export default PauseCircle;
export { PauseCircle };
