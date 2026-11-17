import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotatedSquareMediumProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotatedSquareMedium: ForwardRefExoticComponent<RotatedSquareMediumProps & RefAttributes<SVGSVGElement>>;

export default RotatedSquareMedium;
export { RotatedSquareMedium };
