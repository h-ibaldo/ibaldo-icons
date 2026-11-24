import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackLinkSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackLinkSlanted: ForwardRefExoticComponent<SquareStackLinkSlantedProps & RefAttributes<Svg>>;

export default SquareStackLinkSlanted;
export { SquareStackLinkSlanted };
