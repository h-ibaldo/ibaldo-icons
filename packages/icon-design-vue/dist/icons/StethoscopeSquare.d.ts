import type { DefineComponent } from 'vue';

export interface StethoscopeSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StethoscopeSquare: DefineComponent<StethoscopeSquareProps>;

export default StethoscopeSquare;
export { StethoscopeSquare };
