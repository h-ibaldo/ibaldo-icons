import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RouterLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RouterLock: ForwardRefExoticComponent<RouterLockProps & RefAttributes<SVGSVGElement>>;

export default RouterLock;
export { RouterLock };
