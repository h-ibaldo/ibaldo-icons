import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRight: ForwardRefExoticComponent<ArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ArrowRight;
export { ArrowRight };
