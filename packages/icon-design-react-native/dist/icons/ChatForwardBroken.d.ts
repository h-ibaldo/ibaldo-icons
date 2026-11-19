import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardBroken: ForwardRefExoticComponent<ChatForwardBrokenProps & RefAttributes<Svg>>;

export default ChatForwardBroken;
export { ChatForwardBroken };
