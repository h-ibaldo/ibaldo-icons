import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeDollarJaggedSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeDollarJaggedSharp: ForwardRefExoticComponent<BadgeDollarJaggedSharpProps & RefAttributes<SVGSVGElement>>;

export default BadgeDollarJaggedSharp;
export { BadgeDollarJaggedSharp };
