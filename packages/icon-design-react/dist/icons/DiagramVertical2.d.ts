import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramVertical2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramVertical2: ForwardRefExoticComponent<DiagramVertical2Props & RefAttributes<SVGSVGElement>>;

export default DiagramVertical2;
export { DiagramVertical2 };
