import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftToDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftToDot: ForwardRefExoticComponent<ArrowLeftToDotProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftToDot;
export { ArrowLeftToDot };
