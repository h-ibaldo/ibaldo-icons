import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleBroken: ForwardRefExoticComponent<ChatMinusCircleBrokenProps & RefAttributes<Svg>>;

export default ChatMinusCircleBroken;
export { ChatMinusCircleBroken };
