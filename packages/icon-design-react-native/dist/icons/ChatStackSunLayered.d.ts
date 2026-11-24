import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSunLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSunLayered: ForwardRefExoticComponent<ChatStackSunLayeredProps & RefAttributes<Svg>>;

export default ChatStackSunLayered;
export { ChatStackSunLayered };
