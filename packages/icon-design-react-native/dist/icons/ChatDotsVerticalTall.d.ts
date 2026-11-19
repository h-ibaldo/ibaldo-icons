import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalTall: ForwardRefExoticComponent<ChatDotsVerticalTallProps & RefAttributes<Svg>>;

export default ChatDotsVerticalTall;
export { ChatDotsVerticalTall };
