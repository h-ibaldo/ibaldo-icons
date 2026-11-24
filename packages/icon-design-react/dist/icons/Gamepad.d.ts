import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GamepadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gamepad: ForwardRefExoticComponent<GamepadProps & RefAttributes<SVGSVGElement>>;

export default Gamepad;
export { Gamepad };
