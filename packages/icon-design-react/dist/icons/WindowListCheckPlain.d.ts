import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListCheckPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListCheckPlain: ForwardRefExoticComponent<WindowListCheckPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListCheckPlain;
export { WindowListCheckPlain };
