import type { DefineComponent } from 'vue';

export interface OptionsCheckPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionsCheckPlus: DefineComponent<OptionsCheckPlusProps>;

export default OptionsCheckPlus;
export { OptionsCheckPlus };
