import type { DefineComponent } from 'vue';

export interface WarningDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningDashed: DefineComponent<WarningDashedProps>;

export default WarningDashed;
export { WarningDashed };
