import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDollarCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDollarCornerBoxy: ForwardRefExoticComponent<ChatStackDollarCornerBoxyProps & RefAttributes<Svg>>;

export default ChatStackDollarCornerBoxy;
export { ChatStackDollarCornerBoxy };
