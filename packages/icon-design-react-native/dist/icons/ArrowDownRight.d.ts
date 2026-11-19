import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRight: ForwardRefExoticComponent<ArrowDownRightProps & RefAttributes<Svg>>;

export default ArrowDownRight;
export { ArrowDownRight };
