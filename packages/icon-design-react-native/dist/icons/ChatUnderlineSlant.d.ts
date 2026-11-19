import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUnderlineSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineSlant: ForwardRefExoticComponent<ChatUnderlineSlantProps & RefAttributes<Svg>>;

export default ChatUnderlineSlant;
export { ChatUnderlineSlant };
