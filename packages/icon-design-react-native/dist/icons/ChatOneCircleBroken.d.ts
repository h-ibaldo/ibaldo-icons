import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOneCircleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleBroken: ForwardRefExoticComponent<ChatOneCircleBrokenProps & RefAttributes<Svg>>;

export default ChatOneCircleBroken;
export { ChatOneCircleBroken };
