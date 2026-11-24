import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckBoxy: ForwardRefExoticComponent<ChatStackCheckBoxyProps & RefAttributes<Svg>>;

export default ChatStackCheckBoxy;
export { ChatStackCheckBoxy };
