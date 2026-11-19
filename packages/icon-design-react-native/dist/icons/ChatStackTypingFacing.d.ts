import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTypingFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingFacing: ForwardRefExoticComponent<ChatStackTypingFacingProps & RefAttributes<Svg>>;

export default ChatStackTypingFacing;
export { ChatStackTypingFacing };
