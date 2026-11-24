import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusBroken: ForwardRefExoticComponent<ChatMinusBrokenProps & RefAttributes<Svg>>;

export default ChatMinusBroken;
export { ChatMinusBroken };
