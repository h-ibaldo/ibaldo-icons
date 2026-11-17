import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreenTabRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreenTabRight: ForwardRefExoticComponent<RotateScreenTabRightProps & RefAttributes<SVGSVGElement>>;

export default RotateScreenTabRight;
export { RotateScreenTabRight };
