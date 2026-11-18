import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchBracketsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchBrackets: ForwardRefExoticComponent<SearchBracketsProps & RefAttributes<SVGSVGElement>>;

export default SearchBrackets;
export { SearchBrackets };
