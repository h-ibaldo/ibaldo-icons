import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramTreeLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramTreeLarge: ForwardRefExoticComponent<DiagramTreeLargeProps & RefAttributes<SVGSVGElement>>;

export default DiagramTreeLarge;
export { DiagramTreeLarge };
