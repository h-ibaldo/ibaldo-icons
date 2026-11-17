import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowEyedropperBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowEyedropperBare: ForwardRefExoticComponent<WindowEyedropperBareProps & RefAttributes<SVGSVGElement>>;

export default WindowEyedropperBare;
export { WindowEyedropperBare };
