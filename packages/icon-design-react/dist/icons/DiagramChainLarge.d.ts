import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramChainLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramChainLarge: ForwardRefExoticComponent<DiagramChainLargeProps & RefAttributes<SVGSVGElement>>;

export default DiagramChainLarge;
export { DiagramChainLarge };
