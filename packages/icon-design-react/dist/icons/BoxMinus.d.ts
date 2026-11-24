import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxMinus: ForwardRefExoticComponent<BoxMinusProps & RefAttributes<SVGSVGElement>>;

export default BoxMinus;
export { BoxMinus };
