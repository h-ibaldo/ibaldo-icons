import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMedalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMedal: ForwardRefExoticComponent<WindowMedalProps & RefAttributes<Svg>>;

export default WindowMedal;
export { WindowMedal };
