import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCursorSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCursorSlant: ForwardRefExoticComponent<ChatStackDotsCursorSlantProps & RefAttributes<Svg>>;

export default ChatStackDotsCursorSlant;
export { ChatStackDotsCursorSlant };
