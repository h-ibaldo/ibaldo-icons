import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DomainGlobeCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DomainGlobeCenter: ForwardRefExoticComponent<DomainGlobeCenterProps & RefAttributes<SVGSVGElement>>;

export default DomainGlobeCenter;
export { DomainGlobeCenter };
