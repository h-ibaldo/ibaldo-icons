import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveLabelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveLabel: ForwardRefExoticComponent<SaveLabelProps & RefAttributes<Svg>>;

export default SaveLabel;
export { SaveLabel };
