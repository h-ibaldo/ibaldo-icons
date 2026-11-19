import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SliderTrackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SliderTrack: ForwardRefExoticComponent<SliderTrackProps & RefAttributes<Svg>>;

export default SliderTrack;
export { SliderTrack };
