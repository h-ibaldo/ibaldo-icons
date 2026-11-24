import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsWide: ForwardRefExoticComponent<BinocularsWideProps & RefAttributes<SVGSVGElement>>;

export default BinocularsWide;
export { BinocularsWide };
