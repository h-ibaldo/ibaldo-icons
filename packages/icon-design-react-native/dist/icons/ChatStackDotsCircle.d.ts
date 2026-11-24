import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircle: ForwardRefExoticComponent<ChatStackDotsCircleProps & RefAttributes<Svg>>;

export default ChatStackDotsCircle;
export { ChatStackDotsCircle };
