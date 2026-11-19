import type { DefineComponent } from 'vue';

export interface SwitchRockerOnProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwitchRockerOn: DefineComponent<SwitchRockerOnProps>;

export default SwitchRockerOn;
export { SwitchRockerOn };
