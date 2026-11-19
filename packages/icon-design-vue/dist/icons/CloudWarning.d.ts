import type { DefineComponent } from 'vue';

export interface CloudWarningProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudWarning: DefineComponent<CloudWarningProps>;

export default CloudWarning;
export { CloudWarning };
