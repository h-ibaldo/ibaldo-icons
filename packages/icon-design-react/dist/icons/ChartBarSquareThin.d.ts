import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareThin: ForwardRefExoticComponent<ChartBarSquareThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareThin;
export { ChartBarSquareThin };
