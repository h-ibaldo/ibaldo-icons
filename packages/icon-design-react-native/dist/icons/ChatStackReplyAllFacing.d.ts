import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyAllFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllFacing: ForwardRefExoticComponent<ChatStackReplyAllFacingProps & RefAttributes<Svg>>;

export default ChatStackReplyAllFacing;
export { ChatStackReplyAllFacing };
