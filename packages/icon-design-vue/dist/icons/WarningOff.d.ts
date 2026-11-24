import type { DefineComponent } from 'vue';

export interface WarningOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningOff: DefineComponent<WarningOffProps>;

export default WarningOff;
export { WarningOff };
