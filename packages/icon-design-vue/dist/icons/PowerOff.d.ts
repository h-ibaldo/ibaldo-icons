import type { DefineComponent } from 'vue';

export interface PowerOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PowerOff: DefineComponent<PowerOffProps>;

export default PowerOff;
export { PowerOff };
