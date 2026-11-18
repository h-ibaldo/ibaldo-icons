import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonSparkleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonSparkle: ForwardRefExoticComponent<MoonSparkleProps & RefAttributes<SVGSVGElement>>;

export default MoonSparkle;
export { MoonSparkle };
