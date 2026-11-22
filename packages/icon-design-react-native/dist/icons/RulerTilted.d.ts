import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RulerTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RulerTilted: ForwardRefExoticComponent<RulerTiltedProps & RefAttributes<Svg>>;

export default RulerTilted;
export { RulerTilted };
