import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUnderlineBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineBroken: ForwardRefExoticComponent<ChatUnderlineBrokenProps & RefAttributes<Svg>>;

export default ChatUnderlineBroken;
export { ChatUnderlineBroken };
