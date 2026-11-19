import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackClockBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackClockBoxy: ForwardRefExoticComponent<ChatStackClockBoxyProps & RefAttributes<Svg>>;

export default ChatStackClockBoxy;
export { ChatStackClockBoxy };
