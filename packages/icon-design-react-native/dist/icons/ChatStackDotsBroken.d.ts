import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsBroken: ForwardRefExoticComponent<ChatStackDotsBrokenProps & RefAttributes<Svg>>;

export default ChatStackDotsBroken;
export { ChatStackDotsBroken };
