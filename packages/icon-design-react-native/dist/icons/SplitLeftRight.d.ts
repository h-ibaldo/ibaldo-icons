import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SplitLeftRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SplitLeftRight: ForwardRefExoticComponent<SplitLeftRightProps & RefAttributes<Svg>>;

export default SplitLeftRight;
export { SplitLeftRight };
