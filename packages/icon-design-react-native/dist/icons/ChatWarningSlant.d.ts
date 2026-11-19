import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWarningSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWarningSlant: ForwardRefExoticComponent<ChatWarningSlantProps & RefAttributes<Svg>>;

export default ChatWarningSlant;
export { ChatWarningSlant };
