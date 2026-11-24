import type { DefineComponent } from 'vue';

export interface WindowSpinnerDotsArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDotsArc: DefineComponent<WindowSpinnerDotsArcProps>;

export default WindowSpinnerDotsArc;
export { WindowSpinnerDotsArc };
