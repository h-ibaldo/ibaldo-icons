import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeLong: ForwardRefExoticComponent<GaugeLongProps & RefAttributes<SVGSVGElement>>;

export default GaugeLong;
export { GaugeLong };
