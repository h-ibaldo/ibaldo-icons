import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeLongTicksFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeLongTicksFlat: ForwardRefExoticComponent<GaugeLongTicksFlatProps & RefAttributes<SVGSVGElement>>;

export default GaugeLongTicksFlat;
export { GaugeLongTicksFlat };
