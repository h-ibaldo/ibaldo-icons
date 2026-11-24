import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeDots: ForwardRefExoticComponent<GaugeDotsProps & RefAttributes<SVGSVGElement>>;

export default GaugeDots;
export { GaugeDots };
