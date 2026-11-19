import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsTall: ForwardRefExoticComponent<ChatDotsTallProps & RefAttributes<Svg>>;

export default ChatDotsTall;
export { ChatDotsTall };
