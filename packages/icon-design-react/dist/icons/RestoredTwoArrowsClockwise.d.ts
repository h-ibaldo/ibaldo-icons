import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RestoredTwoArrowsClockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RestoredTwoArrowsClockwise: ForwardRefExoticComponent<RestoredTwoArrowsClockwiseProps & RefAttributes<SVGSVGElement>>;

export default RestoredTwoArrowsClockwise;
export { RestoredTwoArrowsClockwise };
