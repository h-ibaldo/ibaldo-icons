import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenShareWindowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenShareWindows: ForwardRefExoticComponent<ScreenShareWindowsProps & RefAttributes<SVGSVGElement>>;

export default ScreenShareWindows;
export { ScreenShareWindows };
