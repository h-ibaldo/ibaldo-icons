import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeypadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keypad: ForwardRefExoticComponent<KeypadProps & RefAttributes<SVGSVGElement>>;

export default Keypad;
export { Keypad };
