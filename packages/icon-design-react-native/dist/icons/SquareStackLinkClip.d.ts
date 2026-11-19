import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackLinkClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackLinkClip: ForwardRefExoticComponent<SquareStackLinkClipProps & RefAttributes<Svg>>;

export default SquareStackLinkClip;
export { SquareStackLinkClip };
