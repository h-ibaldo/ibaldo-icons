import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CreditCardSignalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CreditCardSignal: ForwardRefExoticComponent<CreditCardSignalProps & RefAttributes<Svg>>;

export default CreditCardSignal;
export { CreditCardSignal };
