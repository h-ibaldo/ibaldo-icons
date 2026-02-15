import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramHierarchy32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramHierarchy32: ForwardRefExoticComponent<DiagramHierarchy32Props & RefAttributes<SVGSVGElement>>;

export default DiagramHierarchy32;
export { DiagramHierarchy32 };
