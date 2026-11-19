import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveStack: ForwardRefExoticComponent<SaveStackProps & RefAttributes<Svg>>;

export default SaveStack;
export { SaveStack };
