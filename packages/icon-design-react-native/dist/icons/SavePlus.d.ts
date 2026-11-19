import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SavePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SavePlus: ForwardRefExoticComponent<SavePlusProps & RefAttributes<Svg>>;

export default SavePlus;
export { SavePlus };
