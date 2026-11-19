import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveEdit: ForwardRefExoticComponent<SaveEditProps & RefAttributes<Svg>>;

export default SaveEdit;
export { SaveEdit };
