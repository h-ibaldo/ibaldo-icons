import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXDouble: ForwardRefExoticComponent<ChatXDoubleProps & RefAttributes<Svg>>;

export default ChatXDouble;
export { ChatXDouble };
