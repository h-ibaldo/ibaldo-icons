import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerBoxy: ForwardRefExoticComponent<ChatMinusCornerBoxyProps & RefAttributes<Svg>>;

export default ChatMinusCornerBoxy;
export { ChatMinusCornerBoxy };
