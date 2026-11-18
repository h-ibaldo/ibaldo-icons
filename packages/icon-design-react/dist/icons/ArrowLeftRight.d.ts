import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftRight: ForwardRefExoticComponent<ArrowLeftRightProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftRight;
export { ArrowLeftRight };
