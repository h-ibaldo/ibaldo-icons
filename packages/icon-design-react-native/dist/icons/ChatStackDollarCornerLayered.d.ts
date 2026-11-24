import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDollarCornerLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDollarCornerLayered: ForwardRefExoticComponent<ChatStackDollarCornerLayeredProps & RefAttributes<Svg>>;

export default ChatStackDollarCornerLayered;
export { ChatStackDollarCornerLayered };
