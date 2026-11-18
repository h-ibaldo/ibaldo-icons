import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLock: ForwardRefExoticComponent<WindowLockProps & RefAttributes<SVGSVGElement>>;

export default WindowLock;
export { WindowLock };
