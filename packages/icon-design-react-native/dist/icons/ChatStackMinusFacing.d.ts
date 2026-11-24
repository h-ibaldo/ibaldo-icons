import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusFacing: ForwardRefExoticComponent<ChatStackMinusFacingProps & RefAttributes<Svg>>;

export default ChatStackMinusFacing;
export { ChatStackMinusFacing };
