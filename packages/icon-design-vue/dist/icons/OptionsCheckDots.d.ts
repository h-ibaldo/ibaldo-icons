import type { DefineComponent } from 'vue';

export interface OptionsCheckDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionsCheckDots: DefineComponent<OptionsCheckDotsProps>;

export default OptionsCheckDots;
export { OptionsCheckDots };
