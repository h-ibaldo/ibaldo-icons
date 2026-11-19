import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncHexagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncHexagon: ForwardRefExoticComponent<ArrowSyncHexagonProps & RefAttributes<Svg>>;

export default ArrowSyncHexagon;
export { ArrowSyncHexagon };
