import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSlidersPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSlidersPlain: ForwardRefExoticComponent<WindowSlidersPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSlidersPlain;
export { WindowSlidersPlain };
