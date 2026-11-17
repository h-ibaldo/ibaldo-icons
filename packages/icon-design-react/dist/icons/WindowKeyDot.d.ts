import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowKeyDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowKeyDot: ForwardRefExoticComponent<WindowKeyDotProps & RefAttributes<SVGSVGElement>>;

export default WindowKeyDot;
export { WindowKeyDot };
