import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Keypad5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad5: ForwardRefExoticComponent<Keypad5Props & RefAttributes<SVGSVGElement>>;

export default Keypad5;
export { Keypad5 };
