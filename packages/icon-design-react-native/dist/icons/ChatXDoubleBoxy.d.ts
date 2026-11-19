import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXDoubleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleBoxy: ForwardRefExoticComponent<ChatXDoubleBoxyProps & RefAttributes<Svg>>;

export default ChatXDoubleBoxy;
export { ChatXDoubleBoxy };
