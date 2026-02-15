import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramHierarchy4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramHierarchy4: ForwardRefExoticComponent<DiagramHierarchy4Props & RefAttributes<SVGSVGElement>>;

export default DiagramHierarchy4;
export { DiagramHierarchy4 };
