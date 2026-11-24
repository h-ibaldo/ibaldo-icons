import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SliderPointerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SliderPointer: ForwardRefExoticComponent<SliderPointerProps & RefAttributes<Svg>>;

export default SliderPointer;
export { SliderPointer };
