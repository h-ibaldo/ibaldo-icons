import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandBanknoteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandBanknote: ForwardRefExoticComponent<HandBanknoteProps & RefAttributes<Svg>>;

export default HandBanknote;
export { HandBanknote };
