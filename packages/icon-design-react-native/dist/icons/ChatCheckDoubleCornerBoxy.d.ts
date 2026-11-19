import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCornerBoxy: ForwardRefExoticComponent<ChatCheckDoubleCornerBoxyProps & RefAttributes<Svg>>;

export default ChatCheckDoubleCornerBoxy;
export { ChatCheckDoubleCornerBoxy };
