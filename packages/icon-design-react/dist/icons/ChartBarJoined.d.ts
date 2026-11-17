import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarJoined: ForwardRefExoticComponent<ChartBarJoinedProps & RefAttributes<SVGSVGElement>>;

export default ChartBarJoined;
export { ChartBarJoined };
