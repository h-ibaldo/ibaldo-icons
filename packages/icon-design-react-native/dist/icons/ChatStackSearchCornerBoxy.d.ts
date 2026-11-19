import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSearchCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCornerBoxy: ForwardRefExoticComponent<ChatStackSearchCornerBoxyProps & RefAttributes<Svg>>;

export default ChatStackSearchCornerBoxy;
export { ChatStackSearchCornerBoxy };
