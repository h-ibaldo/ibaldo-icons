import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveSearch2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveSearch2: ForwardRefExoticComponent<SaveSearch2Props & RefAttributes<Svg>>;

export default SaveSearch2;
export { SaveSearch2 };
