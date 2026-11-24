import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlugWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlugWide: ForwardRefExoticComponent<PlugWideProps & RefAttributes<SVGSVGElement>>;

export default PlugWide;
export { PlugWide };
