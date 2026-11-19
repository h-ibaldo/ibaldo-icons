import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchTapDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchTapDouble: ForwardRefExoticComponent<TouchTapDoubleProps & RefAttributes<Svg>>;

export default TouchTapDouble;
export { TouchTapDouble };
