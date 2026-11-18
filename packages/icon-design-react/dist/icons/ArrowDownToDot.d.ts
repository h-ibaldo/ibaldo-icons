import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownToDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownToDot: ForwardRefExoticComponent<ArrowDownToDotProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownToDot;
export { ArrowDownToDot };
