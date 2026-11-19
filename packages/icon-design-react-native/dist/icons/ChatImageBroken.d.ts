import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatImageBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatImageBroken: ForwardRefExoticComponent<ChatImageBrokenProps & RefAttributes<Svg>>;

export default ChatImageBroken;
export { ChatImageBroken };
