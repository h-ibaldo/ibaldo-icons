import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SliderLevelControl1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SliderLevelControl1: ForwardRefExoticComponent<SliderLevelControl1Props & RefAttributes<SVGSVGElement>>;

export default SliderLevelControl1;
export { SliderLevelControl1 };
