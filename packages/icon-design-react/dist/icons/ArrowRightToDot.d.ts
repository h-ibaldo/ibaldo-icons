import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightToDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightToDot: ForwardRefExoticComponent<ArrowRightToDotProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightToDot;
export { ArrowRightToDot };
