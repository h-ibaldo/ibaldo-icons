import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockLinkTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockLinkTilted: ForwardRefExoticComponent<ClockLinkTiltedProps & RefAttributes<Svg>>;

export default ClockLinkTilted;
export { ClockLinkTilted };
