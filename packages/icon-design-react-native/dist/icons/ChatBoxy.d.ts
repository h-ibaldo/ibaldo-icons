import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatBoxy: ForwardRefExoticComponent<ChatBoxyProps & RefAttributes<Svg>>;

export default ChatBoxy;
export { ChatBoxy };
