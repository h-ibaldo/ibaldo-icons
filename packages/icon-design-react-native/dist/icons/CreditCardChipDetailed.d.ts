import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CreditCardChipDetailedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CreditCardChipDetailed: ForwardRefExoticComponent<CreditCardChipDetailedProps & RefAttributes<Svg>>;

export default CreditCardChipDetailed;
export { CreditCardChipDetailed };
