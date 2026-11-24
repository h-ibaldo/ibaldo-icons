import type { DefineComponent } from 'vue';

export interface CloudXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudX: DefineComponent<CloudXProps>;

export default CloudX;
export { CloudX };
