import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOffBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOffBroken: ForwardRefExoticComponent<ChatStackOffBrokenProps & RefAttributes<Svg>>;

export default ChatStackOffBroken;
export { ChatStackOffBroken };
