import type { DefineComponent } from 'vue';

export interface WarningProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Warning: DefineComponent<WarningProps>;

export default Warning;
export { Warning };
