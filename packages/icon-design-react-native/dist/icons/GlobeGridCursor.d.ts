import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeGridCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeGridCursor: ForwardRefExoticComponent<GlobeGridCursorProps & RefAttributes<Svg>>;

export default GlobeGridCursor;
export { GlobeGridCursor };
