import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1StripeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Stripe: ForwardRefExoticComponent<Bookmark1StripeProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Stripe;
export { Bookmark1Stripe };
