import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlFullscreenCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlFullscreenCircle: ForwardRefExoticComponent<WindowControlFullscreenCircleProps & RefAttributes<SVGSVGElement>>;

export default WindowControlFullscreenCircle;
export { WindowControlFullscreenCircle };
