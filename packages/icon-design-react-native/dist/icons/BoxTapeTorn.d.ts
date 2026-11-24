import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxTapeTornProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxTapeTorn: ForwardRefExoticComponent<BoxTapeTornProps & RefAttributes<Svg>>;

export default BoxTapeTorn;
export { BoxTapeTorn };
