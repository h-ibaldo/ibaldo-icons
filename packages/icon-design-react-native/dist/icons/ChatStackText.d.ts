import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackText: ForwardRefExoticComponent<ChatStackTextProps & RefAttributes<Svg>>;

export default ChatStackText;
export { ChatStackText };
