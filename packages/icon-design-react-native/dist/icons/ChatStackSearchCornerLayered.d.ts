import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSearchCornerLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCornerLayered: ForwardRefExoticComponent<ChatStackSearchCornerLayeredProps & RefAttributes<Svg>>;

export default ChatStackSearchCornerLayered;
export { ChatStackSearchCornerLayered };
