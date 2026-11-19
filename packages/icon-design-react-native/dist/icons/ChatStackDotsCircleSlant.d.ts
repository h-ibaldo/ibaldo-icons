import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCircleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircleSlant: ForwardRefExoticComponent<ChatStackDotsCircleSlantProps & RefAttributes<Svg>>;

export default ChatStackDotsCircleSlant;
export { ChatStackDotsCircleSlant };
