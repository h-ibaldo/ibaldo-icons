import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerBoxy: ForwardRefExoticComponent<ChatCheckCornerBoxyProps & RefAttributes<Svg>>;

export default ChatCheckCornerBoxy;
export { ChatCheckCornerBoxy };
