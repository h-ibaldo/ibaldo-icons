import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleSlant: ForwardRefExoticComponent<ChatMinusCircleSlantProps & RefAttributes<Svg>>;

export default ChatMinusCircleSlant;
export { ChatMinusCircleSlant };
