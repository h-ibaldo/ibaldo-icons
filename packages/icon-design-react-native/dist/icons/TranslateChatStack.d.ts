import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TranslateChatStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TranslateChatStack: ForwardRefExoticComponent<TranslateChatStackProps & RefAttributes<Svg>>;

export default TranslateChatStack;
export { TranslateChatStack };
