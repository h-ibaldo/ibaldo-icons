import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarWide: ForwardRefExoticComponent<StarWideProps & RefAttributes<SVGSVGElement>>;

export default StarWide;
export { StarWide };
