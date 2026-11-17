import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineDownAxisJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineDownAxisJagged: ForwardRefExoticComponent<ChartLineDownAxisJaggedProps & RefAttributes<SVGSVGElement>>;

export default ChartLineDownAxisJagged;
export { ChartLineDownAxisJagged };
