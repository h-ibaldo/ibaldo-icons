import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackAlertSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertSlant: ForwardRefExoticComponent<ChatStackAlertSlantProps & RefAttributes<Svg>>;

export default ChatStackAlertSlant;
export { ChatStackAlertSlant };
