import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextStaggeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextStaggered: ForwardRefExoticComponent<ChatStackTextStaggeredProps & RefAttributes<Svg>>;

export default ChatStackTextStaggered;
export { ChatStackTextStaggered };
