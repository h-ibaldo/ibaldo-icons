import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLockPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLockPlain: ForwardRefExoticComponent<WindowLockPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowLockPlain;
export { WindowLockPlain };
