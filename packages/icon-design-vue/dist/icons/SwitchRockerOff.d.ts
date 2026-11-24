import type { DefineComponent } from 'vue';

export interface SwitchRockerOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchRockerOff: DefineComponent<SwitchRockerOffProps>;

export default SwitchRockerOff;
export { SwitchRockerOff };
