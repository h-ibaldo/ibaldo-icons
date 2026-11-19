import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDollarCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDollarCornerSlant: ForwardRefExoticComponent<ChatStackDollarCornerSlantProps & RefAttributes<Svg>>;

export default ChatStackDollarCornerSlant;
export { ChatStackDollarCornerSlant };
