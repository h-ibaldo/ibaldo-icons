import type { DefineComponent } from 'vue';

export interface EyeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Eye: DefineComponent<EyeProps>;

export default Eye;
export { Eye };
