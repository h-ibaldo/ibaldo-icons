import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlFullscreenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlFullscreen: ForwardRefExoticComponent<WindowControlFullscreenProps & RefAttributes<SVGSVGElement>>;

export default WindowControlFullscreen;
export { WindowControlFullscreen };
