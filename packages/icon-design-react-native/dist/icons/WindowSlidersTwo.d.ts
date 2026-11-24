import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSlidersTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSlidersTwo: ForwardRefExoticComponent<WindowSlidersTwoProps & RefAttributes<Svg>>;

export default WindowSlidersTwo;
export { WindowSlidersTwo };
