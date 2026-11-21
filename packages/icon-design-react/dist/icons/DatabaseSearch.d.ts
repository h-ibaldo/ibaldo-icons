import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseSearch: ForwardRefExoticComponent<DatabaseSearchProps & RefAttributes<SVGSVGElement>>;

export default DatabaseSearch;
export { DatabaseSearch };
