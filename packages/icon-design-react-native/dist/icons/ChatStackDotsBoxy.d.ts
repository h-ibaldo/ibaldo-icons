import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsBoxy: ForwardRefExoticComponent<ChatStackDotsBoxyProps & RefAttributes<Svg>>;

export default ChatStackDotsBoxy;
export { ChatStackDotsBoxy };
