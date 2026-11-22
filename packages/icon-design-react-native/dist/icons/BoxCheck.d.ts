import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxCheck: ForwardRefExoticComponent<BoxCheckProps & RefAttributes<Svg>>;

export default BoxCheck;
export { BoxCheck };
