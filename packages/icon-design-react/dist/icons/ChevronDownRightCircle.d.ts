import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownRightCircle: ForwardRefExoticComponent<ChevronDownRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownRightCircle;
export { ChevronDownRightCircle };
