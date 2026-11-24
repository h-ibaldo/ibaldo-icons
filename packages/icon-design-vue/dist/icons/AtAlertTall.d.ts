import type { DefineComponent } from 'vue';

export interface AtAlertTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtAlertTall: DefineComponent<AtAlertTallProps>;

export default AtAlertTall;
export { AtAlertTall };
