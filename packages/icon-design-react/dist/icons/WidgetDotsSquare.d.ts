import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WidgetDotsSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WidgetDotsSquare: ForwardRefExoticComponent<WidgetDotsSquareProps & RefAttributes<SVGSVGElement>>;

export default WidgetDotsSquare;
export { WidgetDotsSquare };
