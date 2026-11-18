import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListPlusPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListPlusPlain: ForwardRefExoticComponent<WindowListPlusPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListPlusPlain;
export { WindowListPlusPlain };
