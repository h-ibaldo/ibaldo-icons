import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackWarningProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackWarning: ForwardRefExoticComponent<ChatStackWarningProps & RefAttributes<Svg>>;

export default ChatStackWarning;
export { ChatStackWarning };
