import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckDoubleNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckDoubleNotch: ForwardRefExoticComponent<ChatStackCheckDoubleNotchProps & RefAttributes<Svg>>;

export default ChatStackCheckDoubleNotch;
export { ChatStackCheckDoubleNotch };
