import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SliderLevelControl2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SliderLevelControl2: ForwardRefExoticComponent<SliderLevelControl2Props & RefAttributes<SVGSVGElement>>;

export default SliderLevelControl2;
export { SliderLevelControl2 };
