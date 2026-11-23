import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquarePaddingBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquarePaddingBottom: ForwardRefExoticComponent<SquarePaddingBottomProps & RefAttributes<SVGSVGElement>>;

export default SquarePaddingBottom;
export { SquarePaddingBottom };
