import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSunBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSunBoxy: ForwardRefExoticComponent<ChatSunBoxyProps & RefAttributes<Svg>>;

export default ChatSunBoxy;
export { ChatSunBoxy };
