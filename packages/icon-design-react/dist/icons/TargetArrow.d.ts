import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TargetArrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TargetArrow: ForwardRefExoticComponent<TargetArrowProps & RefAttributes<SVGSVGElement>>;

export default TargetArrow;
export { TargetArrow };
