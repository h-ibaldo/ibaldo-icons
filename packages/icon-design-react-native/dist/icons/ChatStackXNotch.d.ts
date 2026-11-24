import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXNotch: ForwardRefExoticComponent<ChatStackXNotchProps & RefAttributes<Svg>>;

export default ChatStackXNotch;
export { ChatStackXNotch };
