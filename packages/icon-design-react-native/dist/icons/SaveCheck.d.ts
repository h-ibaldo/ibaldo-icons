import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveCheck: ForwardRefExoticComponent<SaveCheckProps & RefAttributes<Svg>>;

export default SaveCheck;
export { SaveCheck };
