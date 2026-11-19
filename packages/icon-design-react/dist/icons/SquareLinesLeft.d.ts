import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareLinesLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareLinesLeft: ForwardRefExoticComponent<SquareLinesLeftProps & RefAttributes<SVGSVGElement>>;

export default SquareLinesLeft;
export { SquareLinesLeft };
