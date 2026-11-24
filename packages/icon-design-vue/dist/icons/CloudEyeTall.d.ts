import type { DefineComponent } from 'vue';

export interface CloudEyeTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudEyeTall: DefineComponent<CloudEyeTallProps>;

export default CloudEyeTall;
export { CloudEyeTall };
