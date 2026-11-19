import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveLabelStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveLabelStack: ForwardRefExoticComponent<SaveLabelStackProps & RefAttributes<Svg>>;

export default SaveLabelStack;
export { SaveLabelStack };
