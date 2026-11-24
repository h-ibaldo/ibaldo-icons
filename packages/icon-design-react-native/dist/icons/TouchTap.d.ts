import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchTapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchTap: ForwardRefExoticComponent<TouchTapProps & RefAttributes<Svg>>;

export default TouchTap;
export { TouchTap };
