import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChatRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChatRound: ForwardRefExoticComponent<WindowChatRoundProps & RefAttributes<Svg>>;

export default WindowChatRound;
export { WindowChatRound };
