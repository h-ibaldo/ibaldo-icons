import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOneCircleNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircleNotch: ForwardRefExoticComponent<ChatStackOneCircleNotchProps & RefAttributes<Svg>>;

export default ChatStackOneCircleNotch;
export { ChatStackOneCircleNotch };
