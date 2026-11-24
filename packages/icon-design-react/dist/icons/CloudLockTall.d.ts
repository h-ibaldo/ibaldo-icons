import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLockTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLockTall: ForwardRefExoticComponent<CloudLockTallProps & RefAttributes<SVGSVGElement>>;

export default CloudLockTall;
export { CloudLockTall };
