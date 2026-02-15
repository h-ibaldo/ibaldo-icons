import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad4: ForwardRefExoticComponent<Keypad4Props & RefAttributes<SVGSVGElement>>;

export default Keypad4;
export { Keypad4 };
