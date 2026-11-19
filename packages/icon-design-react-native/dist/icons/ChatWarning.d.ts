import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWarningProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWarning: ForwardRefExoticComponent<ChatWarningProps & RefAttributes<Svg>>;

export default ChatWarning;
export { ChatWarning };
