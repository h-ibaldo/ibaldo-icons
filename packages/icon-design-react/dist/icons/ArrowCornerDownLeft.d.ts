import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornerDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornerDownLeft: ForwardRefExoticComponent<ArrowCornerDownLeftProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornerDownLeft;
export { ArrowCornerDownLeft };
