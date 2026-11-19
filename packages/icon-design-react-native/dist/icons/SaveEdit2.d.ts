import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveEdit2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveEdit2: ForwardRefExoticComponent<SaveEdit2Props & RefAttributes<Svg>>;

export default SaveEdit2;
export { SaveEdit2 };
