import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfoBroken: ForwardRefExoticComponent<ChatInfoBrokenProps & RefAttributes<Svg>>;

export default ChatInfoBroken;
export { ChatInfoBroken };
