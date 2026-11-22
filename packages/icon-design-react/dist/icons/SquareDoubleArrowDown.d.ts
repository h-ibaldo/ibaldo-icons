import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareDoubleArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareDoubleArrowDown: ForwardRefExoticComponent<SquareDoubleArrowDownProps & RefAttributes<SVGSVGElement>>;

export default SquareDoubleArrowDown;
export { SquareDoubleArrowDown };
