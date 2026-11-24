import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackUnderlineTypingFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTypingFacing: ForwardRefExoticComponent<ChatStackUnderlineTypingFacingProps & RefAttributes<Svg>>;

export default ChatStackUnderlineTypingFacing;
export { ChatStackUnderlineTypingFacing };
