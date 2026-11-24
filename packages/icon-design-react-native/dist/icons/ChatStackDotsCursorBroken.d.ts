import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCursorBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCursorBroken: ForwardRefExoticComponent<ChatStackDotsCursorBrokenProps & RefAttributes<Svg>>;

export default ChatStackDotsCursorBroken;
export { ChatStackDotsCursorBroken };
