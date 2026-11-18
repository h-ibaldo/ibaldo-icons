import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeArrowRight: ForwardRefExoticComponent<GaugeArrowRightProps & RefAttributes<SVGSVGElement>>;

export default GaugeArrowRight;
export { GaugeArrowRight };
