import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChatCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChatCorner: ForwardRefExoticComponent<WindowChatCornerProps & RefAttributes<Svg>>;

export default WindowChatCorner;
export { WindowChatCorner };
