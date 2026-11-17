import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenShareWindowsDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenShareWindowsDots: ForwardRefExoticComponent<ScreenShareWindowsDotsProps & RefAttributes<SVGSVGElement>>;

export default ScreenShareWindowsDots;
export { ScreenShareWindowsDots };
