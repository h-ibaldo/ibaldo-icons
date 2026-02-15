import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad2: ForwardRefExoticComponent<Keypad2Props & RefAttributes<SVGSVGElement>>;

export default Keypad2;
export { Keypad2 };
