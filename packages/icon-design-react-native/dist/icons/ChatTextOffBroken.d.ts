import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextOffBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextOffBroken: ForwardRefExoticComponent<ChatTextOffBrokenProps & RefAttributes<Svg>>;

export default ChatTextOffBroken;
export { ChatTextOffBroken };
