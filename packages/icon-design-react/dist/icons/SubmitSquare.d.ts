import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SubmitSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SubmitSquare: ForwardRefExoticComponent<SubmitSquareProps & RefAttributes<SVGSVGElement>>;

export default SubmitSquare;
export { SubmitSquare };
