import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnDown: ForwardRefExoticComponent<ArrowUturnDownProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnDown;
export { ArrowUturnDown };
