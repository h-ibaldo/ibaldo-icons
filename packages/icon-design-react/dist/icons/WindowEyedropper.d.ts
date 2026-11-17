import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowEyedropperProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowEyedropper: ForwardRefExoticComponent<WindowEyedropperProps & RefAttributes<SVGSVGElement>>;

export default WindowEyedropper;
export { WindowEyedropper };
