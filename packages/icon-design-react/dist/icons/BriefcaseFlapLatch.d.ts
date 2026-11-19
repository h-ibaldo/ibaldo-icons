import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseFlapLatchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseFlapLatch: ForwardRefExoticComponent<BriefcaseFlapLatchProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseFlapLatch;
export { BriefcaseFlapLatch };
