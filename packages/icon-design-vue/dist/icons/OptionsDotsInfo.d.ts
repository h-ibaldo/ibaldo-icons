import type { DefineComponent } from 'vue';

export interface OptionsDotsInfoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionsDotsInfo: DefineComponent<OptionsDotsInfoProps>;

export default OptionsDotsInfo;
export { OptionsDotsInfo };
