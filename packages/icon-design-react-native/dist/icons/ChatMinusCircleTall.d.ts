import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleTall: ForwardRefExoticComponent<ChatMinusCircleTallProps & RefAttributes<Svg>>;

export default ChatMinusCircleTall;
export { ChatMinusCircleTall };
