import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOneCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircle: ForwardRefExoticComponent<ChatStackOneCircleProps & RefAttributes<Svg>>;

export default ChatStackOneCircle;
export { ChatStackOneCircle };
