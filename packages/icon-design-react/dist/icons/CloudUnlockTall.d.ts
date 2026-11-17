import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUnlockTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUnlockTall: ForwardRefExoticComponent<CloudUnlockTallProps & RefAttributes<SVGSVGElement>>;

export default CloudUnlockTall;
export { CloudUnlockTall };
