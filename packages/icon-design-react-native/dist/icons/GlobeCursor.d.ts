import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeCursor: ForwardRefExoticComponent<GlobeCursorProps & RefAttributes<Svg>>;

export default GlobeCursor;
export { GlobeCursor };
