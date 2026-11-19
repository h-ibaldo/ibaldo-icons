import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckDoubleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckDoubleBroken: ForwardRefExoticComponent<ChatStackCheckDoubleBrokenProps & RefAttributes<Svg>>;

export default ChatStackCheckDoubleBroken;
export { ChatStackCheckDoubleBroken };
