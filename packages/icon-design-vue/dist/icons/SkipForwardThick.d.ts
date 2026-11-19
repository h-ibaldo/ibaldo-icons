import type { DefineComponent } from 'vue';

export interface SkipForwardThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipForwardThick: DefineComponent<SkipForwardThickProps>;

export default SkipForwardThick;
export { SkipForwardThick };
