import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronRightCircle: ForwardRefExoticComponent<ChevronRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronRightCircle;
export { ChevronRightCircle };
