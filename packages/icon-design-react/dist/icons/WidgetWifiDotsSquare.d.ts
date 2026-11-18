import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WidgetWifiDotsSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WidgetWifiDotsSquare: ForwardRefExoticComponent<WidgetWifiDotsSquareProps & RefAttributes<SVGSVGElement>>;

export default WidgetWifiDotsSquare;
export { WidgetWifiDotsSquare };
