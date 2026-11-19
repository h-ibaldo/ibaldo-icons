import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckLayered: ForwardRefExoticComponent<ChatStackCheckLayeredProps & RefAttributes<Svg>>;

export default ChatStackCheckLayered;
export { ChatStackCheckLayered };
