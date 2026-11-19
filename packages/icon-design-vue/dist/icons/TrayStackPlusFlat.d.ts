import type { DefineComponent } from 'vue';

export interface TrayStackPlusFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackPlusFlat: DefineComponent<TrayStackPlusFlatProps>;

export default TrayStackPlusFlat;
export { TrayStackPlusFlat };
