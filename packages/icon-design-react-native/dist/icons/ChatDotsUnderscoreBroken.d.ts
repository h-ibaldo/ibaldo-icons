import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsUnderscoreBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsUnderscoreBroken: ForwardRefExoticComponent<ChatDotsUnderscoreBrokenProps & RefAttributes<Svg>>;

export default ChatDotsUnderscoreBroken;
export { ChatDotsUnderscoreBroken };
