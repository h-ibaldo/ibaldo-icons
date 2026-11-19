import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyLayered: ForwardRefExoticComponent<ChatStackReplyLayeredProps & RefAttributes<Svg>>;

export default ChatStackReplyLayered;
export { ChatStackReplyLayered };
