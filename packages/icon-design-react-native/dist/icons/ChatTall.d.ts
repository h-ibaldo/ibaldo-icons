import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTall: ForwardRefExoticComponent<ChatTallProps & RefAttributes<Svg>>;

export default ChatTall;
export { ChatTall };
