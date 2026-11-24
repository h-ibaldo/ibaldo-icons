import type { DefineComponent } from 'vue';

export interface TrayStackPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackPlus: DefineComponent<TrayStackPlusProps>;

export default TrayStackPlus;
export { TrayStackPlus };
