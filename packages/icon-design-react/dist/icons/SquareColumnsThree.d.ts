import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareColumnsThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareColumnsThree: ForwardRefExoticComponent<SquareColumnsThreeProps & RefAttributes<SVGSVGElement>>;

export default SquareColumnsThree;
export { SquareColumnsThree };
