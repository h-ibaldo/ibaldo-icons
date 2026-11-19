import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsVertical: ForwardRefExoticComponent<ChatStackDotsVerticalProps & RefAttributes<Svg>>;

export default ChatStackDotsVertical;
export { ChatStackDotsVertical };
