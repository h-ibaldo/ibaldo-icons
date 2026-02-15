import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ThemesColorPaletteGuideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ThemesColorPaletteGuide: ForwardRefExoticComponent<ThemesColorPaletteGuideProps & RefAttributes<SVGSVGElement>>;

export default ThemesColorPaletteGuide;
export { ThemesColorPaletteGuide };
