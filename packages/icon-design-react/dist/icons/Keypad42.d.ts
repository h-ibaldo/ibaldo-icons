import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad42: ForwardRefExoticComponent<Keypad42Props & RefAttributes<SVGSVGElement>>;

export default Keypad42;
export { Keypad42 };
