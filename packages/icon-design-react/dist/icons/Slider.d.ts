import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SliderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Slider: ForwardRefExoticComponent<SliderProps & RefAttributes<SVGSVGElement>>;

export default Slider;
export { Slider };
