import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramHierarchy2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramHierarchy2: ForwardRefExoticComponent<DiagramHierarchy2Props & RefAttributes<SVGSVGElement>>;

export default DiagramHierarchy2;
export { DiagramHierarchy2 };
