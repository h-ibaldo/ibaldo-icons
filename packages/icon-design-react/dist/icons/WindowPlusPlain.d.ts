import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlusPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlusPlain: ForwardRefExoticComponent<WindowPlusPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowPlusPlain;
export { WindowPlusPlain };
