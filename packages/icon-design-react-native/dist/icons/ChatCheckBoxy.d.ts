import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckBoxy: ForwardRefExoticComponent<ChatCheckBoxyProps & RefAttributes<Svg>>;

export default ChatCheckBoxy;
export { ChatCheckBoxy };
