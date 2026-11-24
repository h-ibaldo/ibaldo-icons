import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXLayered: ForwardRefExoticComponent<ChatStackXLayeredProps & RefAttributes<Svg>>;

export default ChatStackXLayered;
export { ChatStackXLayered };
