import type { DefineComponent } from 'vue';

export interface PauseThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PauseThick: DefineComponent<PauseThickProps>;

export default PauseThick;
export { PauseThick };
