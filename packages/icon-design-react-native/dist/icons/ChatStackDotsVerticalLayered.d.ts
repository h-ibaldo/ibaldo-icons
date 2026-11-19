import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsVerticalLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsVerticalLayered: ForwardRefExoticComponent<ChatStackDotsVerticalLayeredProps & RefAttributes<Svg>>;

export default ChatStackDotsVerticalLayered;
export { ChatStackDotsVerticalLayered };
