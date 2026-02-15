import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RectangleArrowAdAdvertisingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RectangleArrowAdAdvertising: ForwardRefExoticComponent<RectangleArrowAdAdvertisingProps & RefAttributes<SVGSVGElement>>;

export default RectangleArrowAdAdvertising;
export { RectangleArrowAdAdvertising };
