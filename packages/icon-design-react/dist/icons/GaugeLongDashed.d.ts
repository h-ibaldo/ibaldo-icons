import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeLongDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeLongDashed: ForwardRefExoticComponent<GaugeLongDashedProps & RefAttributes<SVGSVGElement>>;

export default GaugeLongDashed;
export { GaugeLongDashed };
