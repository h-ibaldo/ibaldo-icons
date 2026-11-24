import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackForwardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackForward: ForwardRefExoticComponent<ChatStackForwardProps & RefAttributes<Svg>>;

export default ChatStackForward;
export { ChatStackForward };
