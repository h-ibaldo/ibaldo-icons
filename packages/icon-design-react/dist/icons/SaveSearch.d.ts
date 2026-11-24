import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveSearch: ForwardRefExoticComponent<SaveSearchProps & RefAttributes<SVGSVGElement>>;

export default SaveSearch;
export { SaveSearch };
