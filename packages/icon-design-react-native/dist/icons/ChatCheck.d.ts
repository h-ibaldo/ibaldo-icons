import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheck: ForwardRefExoticComponent<ChatCheckProps & RefAttributes<Svg>>;

export default ChatCheck;
export { ChatCheck };
