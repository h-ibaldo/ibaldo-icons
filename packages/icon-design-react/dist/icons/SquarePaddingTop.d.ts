import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquarePaddingTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquarePaddingTop: ForwardRefExoticComponent<SquarePaddingTopProps & RefAttributes<SVGSVGElement>>;

export default SquarePaddingTop;
export { SquarePaddingTop };
