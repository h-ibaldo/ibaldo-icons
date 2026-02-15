import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlFullScreenCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlFullScreenCircle: ForwardRefExoticComponent<WindowControlFullScreenCircleProps & RefAttributes<SVGSVGElement>>;

export default WindowControlFullScreenCircle;
export { WindowControlFullScreenCircle };
