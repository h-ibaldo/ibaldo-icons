import type { DefineComponent } from 'vue';

export interface SwitchDialOnProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchDialOn: DefineComponent<SwitchDialOnProps>;

export default SwitchDialOn;
export { SwitchDialOn };
