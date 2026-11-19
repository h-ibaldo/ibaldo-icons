import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveSearch: ForwardRefExoticComponent<SaveSearchProps & RefAttributes<Svg>>;

export default SaveSearch;
export { SaveSearch };
