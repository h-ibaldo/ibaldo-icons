import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsLayered: ForwardRefExoticComponent<ChatStackDotsLayeredProps & RefAttributes<Svg>>;

export default ChatStackDotsLayered;
export { ChatStackDotsLayered };
