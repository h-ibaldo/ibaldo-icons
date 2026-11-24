import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquarePaddingHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquarePaddingHorizontal: ForwardRefExoticComponent<SquarePaddingHorizontalProps & RefAttributes<SVGSVGElement>>;

export default SquarePaddingHorizontal;
export { SquarePaddingHorizontal };
