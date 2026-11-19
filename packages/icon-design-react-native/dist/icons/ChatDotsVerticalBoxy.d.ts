import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalBoxy: ForwardRefExoticComponent<ChatDotsVerticalBoxyProps & RefAttributes<Svg>>;

export default ChatDotsVerticalBoxy;
export { ChatDotsVerticalBoxy };
