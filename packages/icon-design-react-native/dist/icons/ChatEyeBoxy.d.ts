import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEyeBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEyeBoxy: ForwardRefExoticComponent<ChatEyeBoxyProps & RefAttributes<Svg>>;

export default ChatEyeBoxy;
export { ChatEyeBoxy };
