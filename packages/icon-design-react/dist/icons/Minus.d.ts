import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Minus: ForwardRefExoticComponent<MinusProps & RefAttributes<SVGSVGElement>>;

export default Minus;
export { Minus };
