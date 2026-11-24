import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaletteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Palette: ForwardRefExoticComponent<PaletteProps & RefAttributes<SVGSVGElement>>;

export default Palette;
export { Palette };
