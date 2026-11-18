import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListXPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListXPlain: ForwardRefExoticComponent<WindowListXPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListXPlain;
export { WindowListXPlain };
