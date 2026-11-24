import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreenTabLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreenTabLeft: ForwardRefExoticComponent<RotateScreenTabLeftProps & RefAttributes<SVGSVGElement>>;

export default RotateScreenTabLeft;
export { RotateScreenTabLeft };
