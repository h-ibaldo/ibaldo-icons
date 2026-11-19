import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsRadioCheckXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsRadioCheckX: ForwardRefExoticComponent<OptionsRadioCheckXProps & RefAttributes<Svg>>;

export default OptionsRadioCheckX;
export { OptionsRadioCheckX };
