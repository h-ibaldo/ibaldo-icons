import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHappyBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHappyBoxy: ForwardRefExoticComponent<ChatStackHappyBoxyProps & RefAttributes<Svg>>;

export default ChatStackHappyBoxy;
export { ChatStackHappyBoxy };
