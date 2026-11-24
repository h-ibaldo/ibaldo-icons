import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApertureProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Aperture: ForwardRefExoticComponent<ApertureProps & RefAttributes<SVGSVGElement>>;

export default Aperture;
export { Aperture };
