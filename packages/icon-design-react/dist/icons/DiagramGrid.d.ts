import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramGrid: ForwardRefExoticComponent<DiagramGridProps & RefAttributes<SVGSVGElement>>;

export default DiagramGrid;
export { DiagramGrid };
