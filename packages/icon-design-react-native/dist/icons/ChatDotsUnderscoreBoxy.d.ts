import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsUnderscoreBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsUnderscoreBoxy: ForwardRefExoticComponent<ChatDotsUnderscoreBoxyProps & RefAttributes<Svg>>;

export default ChatDotsUnderscoreBoxy;
export { ChatDotsUnderscoreBoxy };
