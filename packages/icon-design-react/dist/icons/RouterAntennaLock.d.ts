import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RouterAntennaLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RouterAntennaLock: ForwardRefExoticComponent<RouterAntennaLockProps & RefAttributes<SVGSVGElement>>;

export default RouterAntennaLock;
export { RouterAntennaLock };
