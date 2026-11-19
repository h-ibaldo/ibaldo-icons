import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextTall: ForwardRefExoticComponent<ChatTextTallProps & RefAttributes<Svg>>;

export default ChatTextTall;
export { ChatTextTall };
