import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusBroken: ForwardRefExoticComponent<ChatPlusBrokenProps & RefAttributes<Svg>>;

export default ChatPlusBroken;
export { ChatPlusBroken };
