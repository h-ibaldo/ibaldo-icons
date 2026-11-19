import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXBroken: ForwardRefExoticComponent<ChatStackXBrokenProps & RefAttributes<Svg>>;

export default ChatStackXBroken;
export { ChatStackXBroken };
