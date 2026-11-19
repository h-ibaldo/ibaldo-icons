import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXCornerStaggeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXCornerStaggered: ForwardRefExoticComponent<ChatStackXCornerStaggeredProps & RefAttributes<Svg>>;

export default ChatStackXCornerStaggered;
export { ChatStackXCornerStaggered };
