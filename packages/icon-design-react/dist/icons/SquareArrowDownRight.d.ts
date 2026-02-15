import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowDownRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowDownRight: ForwardRefExoticComponent<SquareArrowDownRightProps & RefAttributes<SVGSVGElement>>;

export default SquareArrowDownRight;
export { SquareArrowDownRight };
