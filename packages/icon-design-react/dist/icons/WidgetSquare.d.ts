import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WidgetSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WidgetSquare: ForwardRefExoticComponent<WidgetSquareProps & RefAttributes<SVGSVGElement>>;

export default WidgetSquare;
export { WidgetSquare };
