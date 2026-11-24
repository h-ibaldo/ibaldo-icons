import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowShieldPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowShieldPlain: ForwardRefExoticComponent<WindowShieldPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowShieldPlain;
export { WindowShieldPlain };
