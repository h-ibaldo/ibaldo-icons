import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyFacing: ForwardRefExoticComponent<ChatStackReplyFacingProps & RefAttributes<Svg>>;

export default ChatStackReplyFacing;
export { ChatStackReplyFacing };
