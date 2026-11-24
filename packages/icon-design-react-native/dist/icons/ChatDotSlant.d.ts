import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotSlant: ForwardRefExoticComponent<ChatDotSlantProps & RefAttributes<Svg>>;

export default ChatDotSlant;
export { ChatDotSlant };
