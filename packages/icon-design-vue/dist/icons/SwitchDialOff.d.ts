import type { DefineComponent } from 'vue';

export interface SwitchDialOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchDialOff: DefineComponent<SwitchDialOffProps>;

export default SwitchDialOff;
export { SwitchDialOff };
