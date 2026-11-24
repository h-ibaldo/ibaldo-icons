import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCirclePlusThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCirclePlusThin: ForwardRefExoticComponent<ChartBarCirclePlusThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCirclePlusThin;
export { ChartBarCirclePlusThin };
