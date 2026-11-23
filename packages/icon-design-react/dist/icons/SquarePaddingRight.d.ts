import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquarePaddingRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquarePaddingRight: ForwardRefExoticComponent<SquarePaddingRightProps & RefAttributes<SVGSVGElement>>;

export default SquarePaddingRight;
export { SquarePaddingRight };
