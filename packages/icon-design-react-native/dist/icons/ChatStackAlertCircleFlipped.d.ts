import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackAlertCircleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertCircleFlipped: ForwardRefExoticComponent<ChatStackAlertCircleFlippedProps & RefAttributes<Svg>>;

export default ChatStackAlertCircleFlipped;
export { ChatStackAlertCircleFlipped };
