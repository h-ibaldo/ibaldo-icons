import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCursorBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursorBroken: ForwardRefExoticComponent<ChatDotsCursorBrokenProps & RefAttributes<Svg>>;

export default ChatDotsCursorBroken;
export { ChatDotsCursorBroken };
