import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenShareWindowsOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenShareWindowsOff: ForwardRefExoticComponent<ScreenShareWindowsOffProps & RefAttributes<SVGSVGElement>>;

export default ScreenShareWindowsOff;
export { ScreenShareWindowsOff };
