import type { DefineComponent } from 'vue';

export interface SwitchDialOffHandleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchDialOffHandle: DefineComponent<SwitchDialOffHandleProps>;

export default SwitchDialOffHandle;
export { SwitchDialOffHandle };
