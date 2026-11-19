import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEqualsSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEqualsSlant: ForwardRefExoticComponent<ChatEqualsSlantProps & RefAttributes<Svg>>;

export default ChatEqualsSlant;
export { ChatEqualsSlant };
