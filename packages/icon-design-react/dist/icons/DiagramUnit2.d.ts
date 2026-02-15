import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramUnit2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramUnit2: ForwardRefExoticComponent<DiagramUnit2Props & RefAttributes<SVGSVGElement>>;

export default DiagramUnit2;
export { DiagramUnit2 };
