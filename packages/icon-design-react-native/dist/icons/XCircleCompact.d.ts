import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XCircleCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XCircleCompact: ForwardRefExoticComponent<XCircleCompactProps & RefAttributes<Svg>>;

export default XCircleCompact;
export { XCircleCompact };
