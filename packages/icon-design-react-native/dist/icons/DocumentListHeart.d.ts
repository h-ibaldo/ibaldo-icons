import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListHeart: ForwardRefExoticComponent<DocumentListHeartProps & RefAttributes<Svg>>;

export default DocumentListHeart;
export { DocumentListHeart };
