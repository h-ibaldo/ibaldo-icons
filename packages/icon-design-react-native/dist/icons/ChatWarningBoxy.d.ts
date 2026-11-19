import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWarningBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWarningBoxy: ForwardRefExoticComponent<ChatWarningBoxyProps & RefAttributes<Svg>>;

export default ChatWarningBoxy;
export { ChatWarningBoxy };
