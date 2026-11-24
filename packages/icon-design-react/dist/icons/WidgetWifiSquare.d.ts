import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WidgetWifiSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WidgetWifiSquare: ForwardRefExoticComponent<WidgetWifiSquareProps & RefAttributes<SVGSVGElement>>;

export default WidgetWifiSquare;
export { WidgetWifiSquare };
