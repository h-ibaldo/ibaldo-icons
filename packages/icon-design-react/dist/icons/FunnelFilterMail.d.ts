import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelFilterMailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelFilterMail: ForwardRefExoticComponent<FunnelFilterMailProps & RefAttributes<SVGSVGElement>>;

export default FunnelFilterMail;
export { FunnelFilterMail };
