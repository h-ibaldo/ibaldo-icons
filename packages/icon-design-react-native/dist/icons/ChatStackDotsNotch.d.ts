import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsNotch: ForwardRefExoticComponent<ChatStackDotsNotchProps & RefAttributes<Svg>>;

export default ChatStackDotsNotch;
export { ChatStackDotsNotch };
