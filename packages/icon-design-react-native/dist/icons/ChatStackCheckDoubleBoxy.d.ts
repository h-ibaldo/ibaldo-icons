import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckDoubleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckDoubleBoxy: ForwardRefExoticComponent<ChatStackCheckDoubleBoxyProps & RefAttributes<Svg>>;

export default ChatStackCheckDoubleBoxy;
export { ChatStackCheckDoubleBoxy };
