import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramTreeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramTreeRight: ForwardRefExoticComponent<DiagramTreeRightProps & RefAttributes<SVGSVGElement>>;

export default DiagramTreeRight;
export { DiagramTreeRight };
