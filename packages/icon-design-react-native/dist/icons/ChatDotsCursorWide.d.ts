import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCursorWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursorWide: ForwardRefExoticComponent<ChatDotsCursorWideProps & RefAttributes<Svg>>;

export default ChatDotsCursorWide;
export { ChatDotsCursorWide };
