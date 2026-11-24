import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SliderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Slider: ForwardRefExoticComponent<SliderProps & RefAttributes<Svg>>;

export default Slider;
export { Slider };
