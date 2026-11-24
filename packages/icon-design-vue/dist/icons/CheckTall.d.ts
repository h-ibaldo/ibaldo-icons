import type { DefineComponent } from 'vue';

export interface CheckTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckTall: DefineComponent<CheckTallProps>;

export default CheckTall;
export { CheckTall };
