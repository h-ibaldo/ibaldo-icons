import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TechnicalSupportHeadsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TechnicalSupportHeadset: ForwardRefExoticComponent<TechnicalSupportHeadsetProps & RefAttributes<SVGSVGElement>>;

export default TechnicalSupportHeadset;
export { TechnicalSupportHeadset };
