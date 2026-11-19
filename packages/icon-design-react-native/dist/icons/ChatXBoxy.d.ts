import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXBoxy: ForwardRefExoticComponent<ChatXBoxyProps & RefAttributes<Svg>>;

export default ChatXBoxy;
export { ChatXBoxy };
