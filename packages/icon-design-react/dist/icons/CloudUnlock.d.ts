import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUnlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUnlock: ForwardRefExoticComponent<CloudUnlockProps & RefAttributes<SVGSVGElement>>;

export default CloudUnlock;
export { CloudUnlock };
