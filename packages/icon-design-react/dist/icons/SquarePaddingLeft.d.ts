import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquarePaddingLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquarePaddingLeft: ForwardRefExoticComponent<SquarePaddingLeftProps & RefAttributes<SVGSVGElement>>;

export default SquarePaddingLeft;
export { SquarePaddingLeft };
