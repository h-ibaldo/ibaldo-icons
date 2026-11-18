import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackPlusFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackPlusFlat: ForwardRefExoticComponent<TrayStackPlusFlatProps & RefAttributes<SVGSVGElement>>;

export default TrayStackPlusFlat;
export { TrayStackPlusFlat };
