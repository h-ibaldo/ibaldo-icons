import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextOff: ForwardRefExoticComponent<ChatTextOffProps & RefAttributes<Svg>>;

export default ChatTextOff;
export { ChatTextOff };
