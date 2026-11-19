import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextBroken: ForwardRefExoticComponent<ChatStackTextBrokenProps & RefAttributes<Svg>>;

export default ChatStackTextBroken;
export { ChatStackTextBroken };
