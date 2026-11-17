import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowFastPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowFastPlain: ForwardRefExoticComponent<WindowFastPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowFastPlain;
export { WindowFastPlain };
