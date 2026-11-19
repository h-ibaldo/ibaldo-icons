import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextLayered: ForwardRefExoticComponent<ChatStackTextLayeredProps & RefAttributes<Svg>>;

export default ChatStackTextLayered;
export { ChatStackTextLayered };
