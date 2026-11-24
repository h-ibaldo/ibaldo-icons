import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartNotch: ForwardRefExoticComponent<ChatStackHeartNotchProps & RefAttributes<Svg>>;

export default ChatStackHeartNotch;
export { ChatStackHeartNotch };
