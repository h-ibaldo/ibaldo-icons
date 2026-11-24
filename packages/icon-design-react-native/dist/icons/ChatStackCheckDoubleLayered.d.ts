import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckDoubleLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckDoubleLayered: ForwardRefExoticComponent<ChatStackCheckDoubleLayeredProps & RefAttributes<Svg>>;

export default ChatStackCheckDoubleLayered;
export { ChatStackCheckDoubleLayered };
