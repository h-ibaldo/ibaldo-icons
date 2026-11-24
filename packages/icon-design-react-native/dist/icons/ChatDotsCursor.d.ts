import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursor: ForwardRefExoticComponent<ChatDotsCursorProps & RefAttributes<Svg>>;

export default ChatDotsCursor;
export { ChatDotsCursor };
