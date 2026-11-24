import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackEditBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackEditBroken: ForwardRefExoticComponent<ChatStackEditBrokenProps & RefAttributes<Svg>>;

export default ChatStackEditBroken;
export { ChatStackEditBroken };
