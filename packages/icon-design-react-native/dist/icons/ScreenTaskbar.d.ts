import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenTaskbarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenTaskbar: ForwardRefExoticComponent<ScreenTaskbarProps & RefAttributes<Svg>>;

export default ScreenTaskbar;
export { ScreenTaskbar };
