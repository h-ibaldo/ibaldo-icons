import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad3: ForwardRefExoticComponent<Keypad3Props & RefAttributes<SVGSVGElement>>;

export default Keypad3;
export { Keypad3 };
