import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXDoubleNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXDoubleNotch: ForwardRefExoticComponent<ChatStackXDoubleNotchProps & RefAttributes<Svg>>;

export default ChatStackXDoubleNotch;
export { ChatStackXDoubleNotch };
