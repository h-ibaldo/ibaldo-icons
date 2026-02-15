import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramMindMapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramMindMap: ForwardRefExoticComponent<DiagramMindMapProps & RefAttributes<SVGSVGElement>>;

export default DiagramMindMap;
export { DiagramMindMap };
