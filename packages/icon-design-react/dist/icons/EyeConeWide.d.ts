import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeConeWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeConeWide: ForwardRefExoticComponent<EyeConeWideProps & RefAttributes<SVGSVGElement>>;

export default EyeConeWide;
export { EyeConeWide };
