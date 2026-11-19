import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackForwardLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardLayered: ForwardRefExoticComponent<ChatStackForwardLayeredProps & RefAttributes<Svg>>;

export default ChatStackForwardLayered;
export { ChatStackForwardLayered };
