import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOffBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOffBoxy: ForwardRefExoticComponent<ChatStackOffBoxyProps & RefAttributes<Svg>>;

export default ChatStackOffBoxy;
export { ChatStackOffBoxy };
