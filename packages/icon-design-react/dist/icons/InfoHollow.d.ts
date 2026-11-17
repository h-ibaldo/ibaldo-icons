import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoHollowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InfoHollow: ForwardRefExoticComponent<InfoHollowProps & RefAttributes<SVGSVGElement>>;

export default InfoHollow;
export { InfoHollow };
