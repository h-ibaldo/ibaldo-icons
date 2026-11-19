import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackThreeStaggeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackThreeStaggered: ForwardRefExoticComponent<ChatStackThreeStaggeredProps & RefAttributes<Svg>>;

export default ChatStackThreeStaggered;
export { ChatStackThreeStaggered };
