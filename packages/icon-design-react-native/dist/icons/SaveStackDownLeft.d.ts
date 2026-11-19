import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveStackDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveStackDownLeft: ForwardRefExoticComponent<SaveStackDownLeftProps & RefAttributes<Svg>>;

export default SaveStackDownLeft;
export { SaveStackDownLeft };
