import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCircleLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircleLayered: ForwardRefExoticComponent<ChatStackDotsCircleLayeredProps & RefAttributes<Svg>>;

export default ChatStackDotsCircleLayered;
export { ChatStackDotsCircleLayered };
