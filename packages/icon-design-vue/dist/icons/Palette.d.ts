import type { DefineComponent } from 'vue';

export interface PaletteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Palette: DefineComponent<PaletteProps>;

export default Palette;
export { Palette };
