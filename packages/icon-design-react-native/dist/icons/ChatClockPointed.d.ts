import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatClockPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatClockPointed: ForwardRefExoticComponent<ChatClockPointedProps & RefAttributes<Svg>>;

export default ChatClockPointed;
export { ChatClockPointed };
