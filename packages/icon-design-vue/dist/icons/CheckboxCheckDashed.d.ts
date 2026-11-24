import type { DefineComponent } from 'vue';

export interface CheckboxCheckDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckboxCheckDashed: DefineComponent<CheckboxCheckDashedProps>;

export default CheckboxCheckDashed;
export { CheckboxCheckDashed };
