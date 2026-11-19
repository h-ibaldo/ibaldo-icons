import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsCheckPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsCheckPlus: ForwardRefExoticComponent<OptionsCheckPlusProps & RefAttributes<Svg>>;

export default OptionsCheckPlus;
export { OptionsCheckPlus };
