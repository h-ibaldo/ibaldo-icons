import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalStripeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalStripe: ForwardRefExoticComponent<MedalStripeProps & RefAttributes<SVGSVGElement>>;

export default MedalStripe;
export { MedalStripe };
