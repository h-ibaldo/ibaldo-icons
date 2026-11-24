import type { DefineComponent } from 'vue';

export interface FontPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FontPlus: DefineComponent<FontPlusProps>;

export default FontPlus;
export { FontPlus };
