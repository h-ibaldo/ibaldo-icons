import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLayered: ForwardRefExoticComponent<ChatStackLayeredProps & RefAttributes<Svg>>;

export default ChatStackLayered;
export { ChatStackLayered };
