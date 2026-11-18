import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpRightCircle: ForwardRefExoticComponent<ChevronUpRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpRightCircle;
export { ChevronUpRightCircle };
