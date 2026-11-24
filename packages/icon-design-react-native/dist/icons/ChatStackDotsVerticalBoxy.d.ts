import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsVerticalBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsVerticalBoxy: ForwardRefExoticComponent<ChatStackDotsVerticalBoxyProps & RefAttributes<Svg>>;

export default ChatStackDotsVerticalBoxy;
export { ChatStackDotsVerticalBoxy };
