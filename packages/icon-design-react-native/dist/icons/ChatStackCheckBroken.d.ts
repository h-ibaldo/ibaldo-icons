import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckBroken: ForwardRefExoticComponent<ChatStackCheckBrokenProps & RefAttributes<Svg>>;

export default ChatStackCheckBroken;
export { ChatStackCheckBroken };
