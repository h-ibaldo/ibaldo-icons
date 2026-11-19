import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackNotch: ForwardRefExoticComponent<ChatStackNotchProps & RefAttributes<Svg>>;

export default ChatStackNotch;
export { ChatStackNotch };
