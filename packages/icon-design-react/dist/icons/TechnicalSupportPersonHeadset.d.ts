import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TechnicalSupportPersonHeadsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TechnicalSupportPersonHeadset: ForwardRefExoticComponent<TechnicalSupportPersonHeadsetProps & RefAttributes<SVGSVGElement>>;

export default TechnicalSupportPersonHeadset;
export { TechnicalSupportPersonHeadset };
