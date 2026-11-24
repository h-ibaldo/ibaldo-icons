import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StethoscopeListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StethoscopeList: ForwardRefExoticComponent<StethoscopeListProps & RefAttributes<SVGSVGElement>>;

export default StethoscopeList;
export { StethoscopeList };
