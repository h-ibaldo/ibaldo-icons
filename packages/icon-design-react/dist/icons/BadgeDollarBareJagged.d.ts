import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeDollarBareJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeDollarBareJagged: ForwardRefExoticComponent<BadgeDollarBareJaggedProps & RefAttributes<SVGSVGElement>>;

export default BadgeDollarBareJagged;
export { BadgeDollarBareJagged };
