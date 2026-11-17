import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquareWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquareWide: ForwardRefExoticComponent<ChartLineSquareWideProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquareWide;
export { ChartLineSquareWide };
