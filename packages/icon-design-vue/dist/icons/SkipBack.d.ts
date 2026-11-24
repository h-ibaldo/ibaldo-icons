import type { DefineComponent } from 'vue';

export interface SkipBackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipBack: DefineComponent<SkipBackProps>;

export default SkipBack;
export { SkipBack };
