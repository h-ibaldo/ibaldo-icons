import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartBroken: ForwardRefExoticComponent<ChatStackHeartBrokenProps & RefAttributes<Svg>>;

export default ChatStackHeartBroken;
export { ChatStackHeartBroken };
