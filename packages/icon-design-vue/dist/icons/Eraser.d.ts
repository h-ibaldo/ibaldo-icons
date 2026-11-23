import type { DefineComponent } from 'vue';

export interface EraserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Eraser: DefineComponent<EraserProps>;

export default Eraser;
export { Eraser };
