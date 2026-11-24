import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AsteriskSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AsteriskSync: ForwardRefExoticComponent<AsteriskSyncProps & RefAttributes<SVGSVGElement>>;

export default AsteriskSync;
export { AsteriskSync };
