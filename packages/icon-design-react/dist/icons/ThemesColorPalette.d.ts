import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ThemesColorPaletteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ThemesColorPalette: ForwardRefExoticComponent<ThemesColorPaletteProps & RefAttributes<SVGSVGElement>>;

export default ThemesColorPalette;
export { ThemesColorPalette };
