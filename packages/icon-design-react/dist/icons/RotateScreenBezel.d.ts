import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreenBezelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreenBezel: ForwardRefExoticComponent<RotateScreenBezelProps & RefAttributes<SVGSVGElement>>;

export default RotateScreenBezel;
export { RotateScreenBezel };
