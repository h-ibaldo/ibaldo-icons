import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackPlusNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusNotch: ForwardRefExoticComponent<ChatStackPlusNotchProps & RefAttributes<Svg>>;

export default ChatStackPlusNotch;
export { ChatStackPlusNotch };
