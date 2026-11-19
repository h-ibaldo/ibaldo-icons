import type { DefineComponent } from 'vue';

export interface CloudSadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSad: DefineComponent<CloudSadProps>;

export default CloudSad;
export { CloudSad };
