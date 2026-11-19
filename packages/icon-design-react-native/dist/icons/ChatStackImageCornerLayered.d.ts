import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackImageCornerLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackImageCornerLayered: ForwardRefExoticComponent<ChatStackImageCornerLayeredProps & RefAttributes<Svg>>;

export default ChatStackImageCornerLayered;
export { ChatStackImageCornerLayered };
