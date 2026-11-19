import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEqualsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEquals: ForwardRefExoticComponent<ChatEqualsProps & RefAttributes<Svg>>;

export default ChatEquals;
export { ChatEquals };
