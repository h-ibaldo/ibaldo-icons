import type { DefineComponent } from 'vue';

export interface SkipXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipX: DefineComponent<SkipXProps>;

export default SkipX;
export { SkipX };
