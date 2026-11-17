import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarDownSquareThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarDownSquareThin: ForwardRefExoticComponent<ChartBarDownSquareThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarDownSquareThin;
export { ChartBarDownSquareThin };
