import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TechnicalSupportHandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TechnicalSupportHand: ForwardRefExoticComponent<TechnicalSupportHandProps & RefAttributes<SVGSVGElement>>;

export default TechnicalSupportHand;
export { TechnicalSupportHand };
