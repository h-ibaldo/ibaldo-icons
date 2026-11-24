import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareDoubleArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareDoubleArrowRight: ForwardRefExoticComponent<SquareDoubleArrowRightProps & RefAttributes<SVGSVGElement>>;

export default SquareDoubleArrowRight;
export { SquareDoubleArrowRight };
