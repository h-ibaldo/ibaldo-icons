import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramUnitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramUnit: ForwardRefExoticComponent<DiagramUnitProps & RefAttributes<SVGSVGElement>>;

export default DiagramUnit;
export { DiagramUnit };
