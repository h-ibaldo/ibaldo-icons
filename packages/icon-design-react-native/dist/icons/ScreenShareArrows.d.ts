import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareArrowsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShareArrows: ForwardRefExoticComponent<ScreenShareArrowsProps & RefAttributes<Svg>>;

export default ScreenShareArrows;
export { ScreenShareArrows };
