import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMusicDoubleBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMusicDoubleBare: ForwardRefExoticComponent<WindowMusicDoubleBareProps & RefAttributes<SVGSVGElement>>;

export default WindowMusicDoubleBare;
export { WindowMusicDoubleBare };
