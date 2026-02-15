import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramMindMap2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramMindMap2: ForwardRefExoticComponent<DiagramMindMap2Props & RefAttributes<SVGSVGElement>>;

export default DiagramMindMap2;
export { DiagramMindMap2 };
