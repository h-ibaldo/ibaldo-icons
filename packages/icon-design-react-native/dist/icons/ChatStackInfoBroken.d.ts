import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackInfoBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoBroken: ForwardRefExoticComponent<ChatStackInfoBrokenProps & RefAttributes<Svg>>;

export default ChatStackInfoBroken;
export { ChatStackInfoBroken };
