import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCursorBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursorBoxy: ForwardRefExoticComponent<ChatDotsCursorBoxyProps & RefAttributes<Svg>>;

export default ChatDotsCursorBoxy;
export { ChatDotsCursorBoxy };
