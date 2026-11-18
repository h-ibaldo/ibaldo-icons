import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackMinusFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackMinusFlat: ForwardRefExoticComponent<TrayStackMinusFlatProps & RefAttributes<SVGSVGElement>>;

export default TrayStackMinusFlat;
export { TrayStackMinusFlat };
