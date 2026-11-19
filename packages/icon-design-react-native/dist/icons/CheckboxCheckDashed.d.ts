import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckboxCheckDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckboxCheckDashed: ForwardRefExoticComponent<CheckboxCheckDashedProps & RefAttributes<Svg>>;

export default CheckboxCheckDashed;
export { CheckboxCheckDashed };
