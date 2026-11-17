import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningWide: ForwardRefExoticComponent<WarningWideProps & RefAttributes<SVGSVGElement>>;

export default WarningWide;
export { WarningWide };
