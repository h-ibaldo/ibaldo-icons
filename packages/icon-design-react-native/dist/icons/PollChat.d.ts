import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollChat: ForwardRefExoticComponent<PollChatProps & RefAttributes<Svg>>;

export default PollChat;
export { PollChat };
