import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockKeyholeDotNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockKeyholeDotNarrow: ForwardRefExoticComponent<LockKeyholeDotNarrowProps & RefAttributes<Svg>>;

export default LockKeyholeDotNarrow;
export { LockKeyholeDotNarrow };
