import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareCheckThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareCheckThin: ForwardRefExoticComponent<ChartBarSquareCheckThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareCheckThin;
export { ChartBarSquareCheckThin };
