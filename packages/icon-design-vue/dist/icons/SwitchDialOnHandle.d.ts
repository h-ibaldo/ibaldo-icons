import type { DefineComponent } from 'vue';

export interface SwitchDialOnHandleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchDialOnHandle: DefineComponent<SwitchDialOnHandleProps>;

export default SwitchDialOnHandle;
export { SwitchDialOnHandle };
