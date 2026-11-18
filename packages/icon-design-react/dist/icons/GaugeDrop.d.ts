import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeDropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeDrop: ForwardRefExoticComponent<GaugeDropProps & RefAttributes<SVGSVGElement>>;

export default GaugeDrop;
export { GaugeDrop };
