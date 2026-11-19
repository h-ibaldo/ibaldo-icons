import type { DefineComponent } from 'vue';

export interface CloudEyeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudEye: DefineComponent<CloudEyeProps>;

export default CloudEye;
export { CloudEye };
