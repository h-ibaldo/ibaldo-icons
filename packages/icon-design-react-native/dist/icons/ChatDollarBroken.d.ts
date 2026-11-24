import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDollarBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDollarBroken: ForwardRefExoticComponent<ChatDollarBrokenProps & RefAttributes<Svg>>;

export default ChatDollarBroken;
export { ChatDollarBroken };
