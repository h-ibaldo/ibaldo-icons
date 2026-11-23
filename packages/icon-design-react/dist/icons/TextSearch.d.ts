import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextSearch: ForwardRefExoticComponent<TextSearchProps & RefAttributes<SVGSVGElement>>;

export default TextSearch;
export { TextSearch };
