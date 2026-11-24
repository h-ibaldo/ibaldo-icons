import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsBroken: ForwardRefExoticComponent<ChatDotsBrokenProps & RefAttributes<Svg>>;

export default ChatDotsBroken;
export { ChatDotsBroken };
