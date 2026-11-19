import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUnderlineTypingWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineTypingWide: ForwardRefExoticComponent<ChatUnderlineTypingWideProps & RefAttributes<Svg>>;

export default ChatUnderlineTypingWide;
export { ChatUnderlineTypingWide };
