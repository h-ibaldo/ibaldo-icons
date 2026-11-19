import type { DefineComponent } from 'vue';

export interface OptionsCheckInfoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionsCheckInfo: DefineComponent<OptionsCheckInfoProps>;

export default OptionsCheckInfo;
export { OptionsCheckInfo };
