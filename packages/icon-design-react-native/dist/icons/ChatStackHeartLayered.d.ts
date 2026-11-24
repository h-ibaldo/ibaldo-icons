import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartLayered: ForwardRefExoticComponent<ChatStackHeartLayeredProps & RefAttributes<Svg>>;

export default ChatStackHeartLayered;
export { ChatStackHeartLayered };
