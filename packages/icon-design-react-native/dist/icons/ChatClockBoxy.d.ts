import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatClockBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatClockBoxy: ForwardRefExoticComponent<ChatClockBoxyProps & RefAttributes<Svg>>;

export default ChatClockBoxy;
export { ChatClockBoxy };
