import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackAlertBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertBroken: ForwardRefExoticComponent<ChatStackAlertBrokenProps & RefAttributes<Svg>>;

export default ChatStackAlertBroken;
export { ChatStackAlertBroken };
