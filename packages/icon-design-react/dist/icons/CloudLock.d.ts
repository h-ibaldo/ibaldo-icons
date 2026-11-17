import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLock: ForwardRefExoticComponent<CloudLockProps & RefAttributes<SVGSVGElement>>;

export default CloudLock;
export { CloudLock };
