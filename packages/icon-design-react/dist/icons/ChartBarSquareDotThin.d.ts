import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareDotThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareDotThin: ForwardRefExoticComponent<ChartBarSquareDotThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareDotThin;
export { ChartBarSquareDotThin };
