import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusBoxy: ForwardRefExoticComponent<ChatStackMinusBoxyProps & RefAttributes<Svg>>;

export default ChatStackMinusBoxy;
export { ChatStackMinusBoxy };
