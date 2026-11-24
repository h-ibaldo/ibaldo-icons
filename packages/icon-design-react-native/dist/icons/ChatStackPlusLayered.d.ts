import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackPlusLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusLayered: ForwardRefExoticComponent<ChatStackPlusLayeredProps & RefAttributes<Svg>>;

export default ChatStackPlusLayered;
export { ChatStackPlusLayered };
