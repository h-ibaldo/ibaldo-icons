import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareRowsThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareRowsThree: ForwardRefExoticComponent<SquareRowsThreeProps & RefAttributes<SVGSVGElement>>;

export default SquareRowsThree;
export { SquareRowsThree };
