import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOffLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOffLayered: ForwardRefExoticComponent<ChatStackOffLayeredProps & RefAttributes<Svg>>;

export default ChatStackOffLayered;
export { ChatStackOffLayered };
