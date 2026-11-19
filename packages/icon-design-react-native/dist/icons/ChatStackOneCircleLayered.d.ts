import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOneCircleLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircleLayered: ForwardRefExoticComponent<ChatStackOneCircleLayeredProps & RefAttributes<Svg>>;

export default ChatStackOneCircleLayered;
export { ChatStackOneCircleLayered };
