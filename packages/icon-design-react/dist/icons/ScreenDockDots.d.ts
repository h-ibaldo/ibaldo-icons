import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenDockDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenDockDots: ForwardRefExoticComponent<ScreenDockDotsProps & RefAttributes<SVGSVGElement>>;

export default ScreenDockDots;
export { ScreenDockDots };
