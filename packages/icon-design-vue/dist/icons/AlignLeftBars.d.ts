import type { DefineComponent } from 'vue';

export interface AlignLeftBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignLeftBars: DefineComponent<AlignLeftBarsProps>;

export default AlignLeftBars;
export { AlignLeftBars };
