import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsUnderscoreProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsUnderscore: ForwardRefExoticComponent<ChatDotsUnderscoreProps & RefAttributes<Svg>>;

export default ChatDotsUnderscore;
export { ChatDotsUnderscore };
