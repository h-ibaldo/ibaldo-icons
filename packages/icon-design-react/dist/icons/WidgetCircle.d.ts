import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WidgetCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WidgetCircle: ForwardRefExoticComponent<WidgetCircleProps & RefAttributes<SVGSVGElement>>;

export default WidgetCircle;
export { WidgetCircle };
