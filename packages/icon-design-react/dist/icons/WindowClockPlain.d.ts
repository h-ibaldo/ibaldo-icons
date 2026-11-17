import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowClockPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowClockPlain: ForwardRefExoticComponent<WindowClockPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowClockPlain;
export { WindowClockPlain };
