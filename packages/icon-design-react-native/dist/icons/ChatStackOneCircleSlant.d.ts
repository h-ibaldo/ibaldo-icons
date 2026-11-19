import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOneCircleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircleSlant: ForwardRefExoticComponent<ChatStackOneCircleSlantProps & RefAttributes<Svg>>;

export default ChatStackOneCircleSlant;
export { ChatStackOneCircleSlant };
