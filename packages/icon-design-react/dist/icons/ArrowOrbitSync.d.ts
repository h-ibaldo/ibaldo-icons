import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowOrbitSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowOrbitSync: ForwardRefExoticComponent<ArrowOrbitSyncProps & RefAttributes<SVGSVGElement>>;

export default ArrowOrbitSync;
export { ArrowOrbitSync };
