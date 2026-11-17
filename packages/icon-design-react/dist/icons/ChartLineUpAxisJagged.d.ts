import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineUpAxisJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineUpAxisJagged: ForwardRefExoticComponent<ChartLineUpAxisJaggedProps & RefAttributes<SVGSVGElement>>;

export default ChartLineUpAxisJagged;
export { ChartLineUpAxisJagged };
