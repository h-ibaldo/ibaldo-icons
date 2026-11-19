import type { DefineComponent } from 'vue';

export interface CheckBoldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckBold: DefineComponent<CheckBoldProps>;

export default CheckBold;
export { CheckBold };
