import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeDollarJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeDollarJagged: ForwardRefExoticComponent<BadgeDollarJaggedProps & RefAttributes<SVGSVGElement>>;

export default BadgeDollarJagged;
export { BadgeDollarJagged };
