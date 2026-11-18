import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropFlat: ForwardRefExoticComponent<GaugeTeardropFlatProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropFlat;
export { GaugeTeardropFlat };
