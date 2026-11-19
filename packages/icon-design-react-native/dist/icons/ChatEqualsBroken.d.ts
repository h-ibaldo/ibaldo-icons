import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEqualsBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEqualsBroken: ForwardRefExoticComponent<ChatEqualsBrokenProps & RefAttributes<Svg>>;

export default ChatEqualsBroken;
export { ChatEqualsBroken };
