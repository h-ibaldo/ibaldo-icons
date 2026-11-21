import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CreditCardCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CreditCardCheck: ForwardRefExoticComponent<CreditCardCheckProps & RefAttributes<Svg>>;

export default CreditCardCheck;
export { CreditCardCheck };
