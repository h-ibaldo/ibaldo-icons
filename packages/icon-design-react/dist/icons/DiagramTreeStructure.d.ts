import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramTreeStructureProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramTreeStructure: ForwardRefExoticComponent<DiagramTreeStructureProps & RefAttributes<SVGSVGElement>>;

export default DiagramTreeStructure;
export { DiagramTreeStructure };
