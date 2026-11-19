import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressDotsRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressDotsRight: ForwardRefExoticComponent<ProgressDotsRightProps & RefAttributes<Svg>>;

export default ProgressDotsRight;
export { ProgressDotsRight };
