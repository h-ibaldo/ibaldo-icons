import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquarePaddingVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquarePaddingVertical: ForwardRefExoticComponent<SquarePaddingVerticalProps & RefAttributes<SVGSVGElement>>;

export default SquarePaddingVertical;
export { SquarePaddingVertical };
