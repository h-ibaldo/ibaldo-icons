import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunCircleSplitTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunCircleSplitTilted: ForwardRefExoticComponent<SunCircleSplitTiltedProps & RefAttributes<Svg>>;

export default SunCircleSplitTilted;
export { SunCircleSplitTilted };
