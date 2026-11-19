import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuoteBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuoteBroken: ForwardRefExoticComponent<ChatQuoteBrokenProps & RefAttributes<Svg>>;

export default ChatQuoteBroken;
export { ChatQuoteBroken };
