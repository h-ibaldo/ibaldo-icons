import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackImageBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackImageBroken: ForwardRefExoticComponent<ChatStackImageBrokenProps & RefAttributes<Svg>>;

export default ChatStackImageBroken;
export { ChatStackImageBroken };
