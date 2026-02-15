import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowUp: ForwardRefExoticComponent<SquareArrowUpProps & RefAttributes<SVGSVGElement>>;

export default SquareArrowUp;
export { SquareArrowUp };
