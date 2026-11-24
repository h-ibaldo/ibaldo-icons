import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareColumnsThreeDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareColumnsThreeDashed: ForwardRefExoticComponent<SquareColumnsThreeDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareColumnsThreeDashed;
export { SquareColumnsThreeDashed };
