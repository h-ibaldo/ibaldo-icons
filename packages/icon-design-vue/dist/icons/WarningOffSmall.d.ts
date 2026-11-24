import type { DefineComponent } from 'vue';

export interface WarningOffSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningOffSmall: DefineComponent<WarningOffSmallProps>;

export default WarningOffSmall;
export { WarningOffSmall };
