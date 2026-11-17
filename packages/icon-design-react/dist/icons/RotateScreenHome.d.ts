import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreenHomeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreenHome: ForwardRefExoticComponent<RotateScreenHomeProps & RefAttributes<SVGSVGElement>>;

export default RotateScreenHome;
export { RotateScreenHome };
