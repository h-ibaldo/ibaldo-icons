import type { DefineComponent } from 'vue';

export interface PauseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Pause: DefineComponent<PauseProps>;

export default Pause;
export { Pause };
