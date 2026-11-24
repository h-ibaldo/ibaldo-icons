import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckCornerStaggeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckCornerStaggered: ForwardRefExoticComponent<ChatStackCheckCornerStaggeredProps & RefAttributes<Svg>>;

export default ChatStackCheckCornerStaggered;
export { ChatStackCheckCornerStaggered };
