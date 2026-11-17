import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquarePlusThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquarePlusThin: ForwardRefExoticComponent<ChartBarSquarePlusThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquarePlusThin;
export { ChartBarSquarePlusThin };
