import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApproximateSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApproximateSquare: ForwardRefExoticComponent<ApproximateSquareProps & RefAttributes<SVGSVGElement>>;

export default ApproximateSquare;
export { ApproximateSquare };
