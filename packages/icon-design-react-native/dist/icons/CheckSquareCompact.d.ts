import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareCompact: ForwardRefExoticComponent<CheckSquareCompactProps & RefAttributes<Svg>>;

export default CheckSquareCompact;
export { CheckSquareCompact };
