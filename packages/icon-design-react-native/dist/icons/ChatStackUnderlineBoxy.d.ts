import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackUnderlineBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineBoxy: ForwardRefExoticComponent<ChatStackUnderlineBoxyProps & RefAttributes<Svg>>;

export default ChatStackUnderlineBoxy;
export { ChatStackUnderlineBoxy };
