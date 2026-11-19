import type { DefineComponent } from 'vue';

export interface SwitchDialUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchDialUp: DefineComponent<SwitchDialUpProps>;

export default SwitchDialUp;
export { SwitchDialUp };
