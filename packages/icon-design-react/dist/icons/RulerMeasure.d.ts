import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RulerMeasureProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RulerMeasure: ForwardRefExoticComponent<RulerMeasureProps & RefAttributes<SVGSVGElement>>;

export default RulerMeasure;
export { RulerMeasure };
