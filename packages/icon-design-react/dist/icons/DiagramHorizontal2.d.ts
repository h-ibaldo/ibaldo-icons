import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramHorizontal2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramHorizontal2: ForwardRefExoticComponent<DiagramHorizontal2Props & RefAttributes<SVGSVGElement>>;

export default DiagramHorizontal2;
export { DiagramHorizontal2 };
