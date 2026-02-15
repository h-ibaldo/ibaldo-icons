import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsRectangleArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsRectangleArrowIn: ForwardRefExoticComponent<ChartVerticalColumnsRectangleArrowInProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsRectangleArrowIn;
export { ChartVerticalColumnsRectangleArrowIn };
