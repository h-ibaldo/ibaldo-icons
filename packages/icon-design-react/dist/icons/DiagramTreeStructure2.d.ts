import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramTreeStructure2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramTreeStructure2: ForwardRefExoticComponent<DiagramTreeStructure2Props & RefAttributes<SVGSVGElement>>;

export default DiagramTreeStructure2;
export { DiagramTreeStructure2 };
