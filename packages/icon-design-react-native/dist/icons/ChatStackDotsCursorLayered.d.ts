import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCursorLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCursorLayered: ForwardRefExoticComponent<ChatStackDotsCursorLayeredProps & RefAttributes<Svg>>;

export default ChatStackDotsCursorLayered;
export { ChatStackDotsCursorLayered };
