import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUserWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUserWide: ForwardRefExoticComponent<ChatUserWideProps & RefAttributes<Svg>>;

export default ChatUserWide;
export { ChatUserWide };
