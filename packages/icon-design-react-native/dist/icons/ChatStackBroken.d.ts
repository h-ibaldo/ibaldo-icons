import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBroken: ForwardRefExoticComponent<ChatStackBrokenProps & RefAttributes<Svg>>;

export default ChatStackBroken;
export { ChatStackBroken };
