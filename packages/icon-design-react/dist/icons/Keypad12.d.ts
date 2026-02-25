import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad12: ForwardRefExoticComponent<Keypad12Props & RefAttributes<SVGSVGElement>>;

export default Keypad12;
export { Keypad12 };
