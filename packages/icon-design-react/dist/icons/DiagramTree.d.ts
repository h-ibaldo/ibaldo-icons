import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramTreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramTree: ForwardRefExoticComponent<DiagramTreeProps & RefAttributes<SVGSVGElement>>;

export default DiagramTree;
export { DiagramTree };
