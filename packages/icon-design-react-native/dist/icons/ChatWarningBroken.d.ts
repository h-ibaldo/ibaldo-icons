import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWarningBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWarningBroken: ForwardRefExoticComponent<ChatWarningBrokenProps & RefAttributes<Svg>>;

export default ChatWarningBroken;
export { ChatWarningBroken };
