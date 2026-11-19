import type { DefineComponent } from 'vue';

export interface TrayStackMinusFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackMinusFlat: DefineComponent<TrayStackMinusFlatProps>;

export default TrayStackMinusFlat;
export { TrayStackMinusFlat };
