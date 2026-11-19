import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVertical: ForwardRefExoticComponent<ChatDotsVerticalProps & RefAttributes<Svg>>;

export default ChatDotsVertical;
export { ChatDotsVertical };
