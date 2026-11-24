import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSearchBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSearchBoxy: ForwardRefExoticComponent<ChatSearchBoxyProps & RefAttributes<Svg>>;

export default ChatSearchBoxy;
export { ChatSearchBoxy };
