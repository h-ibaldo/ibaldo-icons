import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramHorizontal: ForwardRefExoticComponent<DiagramHorizontalProps & RefAttributes<SVGSVGElement>>;

export default DiagramHorizontal;
export { DiagramHorizontal };
