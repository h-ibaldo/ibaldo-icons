import type { DefineComponent } from 'vue';

export interface CloudOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudOff: DefineComponent<CloudOffProps>;

export default CloudOff;
export { CloudOff };
