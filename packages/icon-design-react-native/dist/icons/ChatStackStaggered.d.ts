import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackStaggeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackStaggered: ForwardRefExoticComponent<ChatStackStaggeredProps & RefAttributes<Svg>>;

export default ChatStackStaggered;
export { ChatStackStaggered };
