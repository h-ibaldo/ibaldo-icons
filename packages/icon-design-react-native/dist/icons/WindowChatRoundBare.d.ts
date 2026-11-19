import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChatRoundBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChatRoundBare: ForwardRefExoticComponent<WindowChatRoundBareProps & RefAttributes<Svg>>;

export default WindowChatRoundBare;
export { WindowChatRoundBare };
