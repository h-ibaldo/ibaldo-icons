import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeDropArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeDropArrowRight: ForwardRefExoticComponent<GaugeDropArrowRightProps & RefAttributes<SVGSVGElement>>;

export default GaugeDropArrowRight;
export { GaugeDropArrowRight };
