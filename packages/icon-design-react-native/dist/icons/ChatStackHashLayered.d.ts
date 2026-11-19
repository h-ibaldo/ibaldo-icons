import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHashLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHashLayered: ForwardRefExoticComponent<ChatStackHashLayeredProps & RefAttributes<Svg>>;

export default ChatStackHashLayered;
export { ChatStackHashLayered };
