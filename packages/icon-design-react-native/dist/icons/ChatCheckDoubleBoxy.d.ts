import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleBoxy: ForwardRefExoticComponent<ChatCheckDoubleBoxyProps & RefAttributes<Svg>>;

export default ChatCheckDoubleBoxy;
export { ChatCheckDoubleBoxy };
