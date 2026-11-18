import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropSplit: ForwardRefExoticComponent<GaugeTeardropSplitProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropSplit;
export { GaugeTeardropSplit };
