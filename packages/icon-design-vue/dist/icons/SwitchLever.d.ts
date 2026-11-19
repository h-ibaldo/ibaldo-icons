import type { DefineComponent } from 'vue';

export interface SwitchLeverProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchLever: DefineComponent<SwitchLeverProps>;

export default SwitchLever;
export { SwitchLever };
