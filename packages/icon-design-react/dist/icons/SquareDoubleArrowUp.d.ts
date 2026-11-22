import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareDoubleArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareDoubleArrowUp: ForwardRefExoticComponent<SquareDoubleArrowUpProps & RefAttributes<SVGSVGElement>>;

export default SquareDoubleArrowUp;
export { SquareDoubleArrowUp };
