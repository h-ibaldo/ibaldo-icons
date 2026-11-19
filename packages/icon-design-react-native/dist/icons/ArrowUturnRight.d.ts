import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnRight: ForwardRefExoticComponent<ArrowUturnRightProps & RefAttributes<Svg>>;

export default ArrowUturnRight;
export { ArrowUturnRight };
