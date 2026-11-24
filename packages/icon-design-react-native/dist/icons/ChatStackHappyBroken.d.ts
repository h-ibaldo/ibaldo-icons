import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHappyBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHappyBroken: ForwardRefExoticComponent<ChatStackHappyBrokenProps & RefAttributes<Svg>>;

export default ChatStackHappyBroken;
export { ChatStackHappyBroken };
