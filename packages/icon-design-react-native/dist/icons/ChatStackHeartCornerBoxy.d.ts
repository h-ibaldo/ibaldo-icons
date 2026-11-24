import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartCornerBoxy: ForwardRefExoticComponent<ChatStackHeartCornerBoxyProps & RefAttributes<Svg>>;

export default ChatStackHeartCornerBoxy;
export { ChatStackHeartCornerBoxy };
