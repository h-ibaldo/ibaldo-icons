import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeDropSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeDropSquare: ForwardRefExoticComponent<GaugeDropSquareProps & RefAttributes<SVGSVGElement>>;

export default GaugeDropSquare;
export { GaugeDropSquare };
