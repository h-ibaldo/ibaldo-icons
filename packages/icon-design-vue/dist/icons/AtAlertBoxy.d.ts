import type { DefineComponent } from 'vue';

export interface AtAlertBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtAlertBoxy: DefineComponent<AtAlertBoxyProps>;

export default AtAlertBoxy;
export { AtAlertBoxy };
