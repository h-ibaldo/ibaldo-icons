import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackEditLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackEditLayered: ForwardRefExoticComponent<ChatStackEditLayeredProps & RefAttributes<Svg>>;

export default ChatStackEditLayered;
export { ChatStackEditLayered };
