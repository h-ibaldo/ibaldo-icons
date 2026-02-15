import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramHierarchy3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramHierarchy3: ForwardRefExoticComponent<DiagramHierarchy3Props & RefAttributes<SVGSVGElement>>;

export default DiagramHierarchy3;
export { DiagramHierarchy3 };
