import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CreditCardDashesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CreditCardDashes: ForwardRefExoticComponent<CreditCardDashesProps & RefAttributes<Svg>>;

export default CreditCardDashes;
export { CreditCardDashes };
