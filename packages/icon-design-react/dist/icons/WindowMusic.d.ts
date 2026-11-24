import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMusicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMusic: ForwardRefExoticComponent<WindowMusicProps & RefAttributes<SVGSVGElement>>;

export default WindowMusic;
export { WindowMusic };
