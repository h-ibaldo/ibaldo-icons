import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinus: ForwardRefExoticComponent<ChatStackMinusProps & RefAttributes<Svg>>;

export default ChatStackMinus;
export { ChatStackMinus };
