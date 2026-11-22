import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareRowsThreeDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareRowsThreeDashed: ForwardRefExoticComponent<SquareRowsThreeDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareRowsThreeDashed;
export { SquareRowsThreeDashed };
