import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistUserSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistUserSmall: ForwardRefExoticComponent<ChecklistUserSmallProps & RefAttributes<Svg>>;

export default ChecklistUserSmall;
export { ChecklistUserSmall };
