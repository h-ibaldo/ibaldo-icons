import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CreditCardMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CreditCardMinus: ForwardRefExoticComponent<CreditCardMinusProps & RefAttributes<Svg>>;

export default CreditCardMinus;
export { CreditCardMinus };
