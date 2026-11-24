import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXDoubleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXDoubleBoxy: ForwardRefExoticComponent<ChatStackXDoubleBoxyProps & RefAttributes<Svg>>;

export default ChatStackXDoubleBoxy;
export { ChatStackXDoubleBoxy };
