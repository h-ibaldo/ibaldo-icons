import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackClockLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackClockLayered: ForwardRefExoticComponent<ChatStackClockLayeredProps & RefAttributes<Svg>>;

export default ChatStackClockLayered;
export { ChatStackClockLayered };
