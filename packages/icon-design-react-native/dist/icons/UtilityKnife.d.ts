import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UtilityKnifeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UtilityKnife: ForwardRefExoticComponent<UtilityKnifeProps & RefAttributes<Svg>>;

export default UtilityKnife;
export { UtilityKnife };
