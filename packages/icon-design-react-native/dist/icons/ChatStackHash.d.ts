import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHash: ForwardRefExoticComponent<ChatStackHashProps & RefAttributes<Svg>>;

export default ChatStackHash;
export { ChatStackHash };
