import type { DefineComponent } from 'vue';

export interface SkipForwardCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipForwardCircle: DefineComponent<SkipForwardCircleProps>;

export default SkipForwardCircle;
export { SkipForwardCircle };
