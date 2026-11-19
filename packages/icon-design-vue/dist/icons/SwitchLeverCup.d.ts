import type { DefineComponent } from 'vue';

export interface SwitchLeverCupProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchLeverCup: DefineComponent<SwitchLeverCupProps>;

export default SwitchLeverCup;
export { SwitchLeverCup };
