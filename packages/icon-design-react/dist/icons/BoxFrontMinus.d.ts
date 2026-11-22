import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxFrontMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxFrontMinus: ForwardRefExoticComponent<BoxFrontMinusProps & RefAttributes<SVGSVGElement>>;

export default BoxFrontMinus;
export { BoxFrontMinus };
