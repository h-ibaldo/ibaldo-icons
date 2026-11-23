import type { DefineComponent } from 'vue';

export interface EraserBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EraserBare: DefineComponent<EraserBareProps>;

export default EraserBare;
export { EraserBare };
