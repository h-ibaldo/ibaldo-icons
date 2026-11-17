import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseHexagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseHexagon: ForwardRefExoticComponent<ArrowCounterclockwiseHexagonProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseHexagon;
export { ArrowCounterclockwiseHexagon };
