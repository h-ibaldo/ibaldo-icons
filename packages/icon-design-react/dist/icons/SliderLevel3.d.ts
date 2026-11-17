import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SliderLevel3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SliderLevel3: ForwardRefExoticComponent<SliderLevel3Props & RefAttributes<SVGSVGElement>>;

export default SliderLevel3;
export { SliderLevel3 };
