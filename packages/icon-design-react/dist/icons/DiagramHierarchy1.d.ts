import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramHierarchy1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramHierarchy1: ForwardRefExoticComponent<DiagramHierarchy1Props & RefAttributes<SVGSVGElement>>;

export default DiagramHierarchy1;
export { DiagramHierarchy1 };
