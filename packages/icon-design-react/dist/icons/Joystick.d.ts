import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JoystickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Joystick: ForwardRefExoticComponent<JoystickProps & RefAttributes<SVGSVGElement>>;

export default Joystick;
export { Joystick };
