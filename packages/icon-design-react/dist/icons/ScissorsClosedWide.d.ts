import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScissorsClosedWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScissorsClosedWide: ForwardRefExoticComponent<ScissorsClosedWideProps & RefAttributes<SVGSVGElement>>;

export default ScissorsClosedWide;
export { ScissorsClosedWide };
