import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraStripeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraStripe: ForwardRefExoticComponent<CameraStripeProps & RefAttributes<SVGSVGElement>>;

export default CameraStripe;
export { CameraStripe };
