import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad22: ForwardRefExoticComponent<Keypad22Props & RefAttributes<SVGSVGElement>>;

export default Keypad22;
export { Keypad22 };
