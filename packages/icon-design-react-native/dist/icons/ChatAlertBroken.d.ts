import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatAlertBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatAlertBroken: ForwardRefExoticComponent<ChatAlertBrokenProps & RefAttributes<Svg>>;

export default ChatAlertBroken;
export { ChatAlertBroken };
