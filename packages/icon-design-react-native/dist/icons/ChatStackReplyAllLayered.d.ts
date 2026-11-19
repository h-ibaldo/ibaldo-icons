import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyAllLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllLayered: ForwardRefExoticComponent<ChatStackReplyAllLayeredProps & RefAttributes<Svg>>;

export default ChatStackReplyAllLayered;
export { ChatStackReplyAllLayered };
