import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEyeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEye: ForwardRefExoticComponent<ChatEyeProps & RefAttributes<Svg>>;

export default ChatEye;
export { ChatEye };
