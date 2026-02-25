import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad32: ForwardRefExoticComponent<Keypad32Props & RefAttributes<SVGSVGElement>>;

export default Keypad32;
export { Keypad32 };
