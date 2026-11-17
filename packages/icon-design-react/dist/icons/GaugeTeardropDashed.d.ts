import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropDashed: ForwardRefExoticComponent<GaugeTeardropDashedProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropDashed;
export { GaugeTeardropDashed };
