import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollHorizontalChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollHorizontalChat: ForwardRefExoticComponent<PollHorizontalChatProps & RefAttributes<Svg>>;

export default PollHorizontalChat;
export { PollHorizontalChat };
