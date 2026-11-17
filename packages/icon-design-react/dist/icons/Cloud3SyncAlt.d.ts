import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3SyncAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3SyncAlt: ForwardRefExoticComponent<Cloud3SyncAltProps & RefAttributes<SVGSVGElement>>;

export default Cloud3SyncAlt;
export { Cloud3SyncAlt };
