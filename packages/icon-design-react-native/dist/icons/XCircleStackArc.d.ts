import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XCircleStackArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XCircleStackArc: ForwardRefExoticComponent<XCircleStackArcProps & RefAttributes<Svg>>;

export default XCircleStackArc;
export { XCircleStackArc };
