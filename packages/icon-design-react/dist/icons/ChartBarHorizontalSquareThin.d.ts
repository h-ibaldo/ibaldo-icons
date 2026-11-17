import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarHorizontalSquareThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarHorizontalSquareThin: ForwardRefExoticComponent<ChartBarHorizontalSquareThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarHorizontalSquareThin;
export { ChartBarHorizontalSquareThin };
