import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCursorBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCursorBoxy: ForwardRefExoticComponent<ChatStackDotsCursorBoxyProps & RefAttributes<Svg>>;

export default ChatStackDotsCursorBoxy;
export { ChatStackDotsCursorBoxy };
