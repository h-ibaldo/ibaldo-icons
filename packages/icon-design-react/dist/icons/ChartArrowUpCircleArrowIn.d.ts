import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpCircleArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpCircleArrowIn: ForwardRefExoticComponent<ChartArrowUpCircleArrowInProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpCircleArrowIn;
export { ChartArrowUpCircleArrowIn };
