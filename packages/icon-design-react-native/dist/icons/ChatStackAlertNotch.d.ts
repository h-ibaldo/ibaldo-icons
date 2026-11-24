import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackAlertNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertNotch: ForwardRefExoticComponent<ChatStackAlertNotchProps & RefAttributes<Svg>>;

export default ChatStackAlertNotch;
export { ChatStackAlertNotch };
