import type { DefineComponent } from 'vue';

export interface WarningSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningSmall: DefineComponent<WarningSmallProps>;

export default WarningSmall;
export { WarningSmall };
