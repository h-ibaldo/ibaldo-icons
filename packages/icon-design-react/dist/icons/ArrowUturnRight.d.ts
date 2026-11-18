import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnRight: ForwardRefExoticComponent<ArrowUturnRightProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnRight;
export { ArrowUturnRight };
