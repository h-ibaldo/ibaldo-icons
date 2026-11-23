import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyboardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Keyboard: ForwardRefExoticComponent<KeyboardProps & RefAttributes<SVGSVGElement>>;

export default Keyboard;
export { Keyboard };
