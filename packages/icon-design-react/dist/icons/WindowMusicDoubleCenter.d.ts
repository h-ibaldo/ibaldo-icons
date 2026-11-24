import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMusicDoubleCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMusicDoubleCenter: ForwardRefExoticComponent<WindowMusicDoubleCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowMusicDoubleCenter;
export { WindowMusicDoubleCenter };
