import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad52Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad52: ForwardRefExoticComponent<Keypad52Props & RefAttributes<SVGSVGElement>>;

export default Keypad52;
export { Keypad52 };
