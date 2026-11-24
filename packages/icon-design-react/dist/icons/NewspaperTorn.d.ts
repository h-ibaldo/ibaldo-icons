import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperTornProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperTorn: ForwardRefExoticComponent<NewspaperTornProps & RefAttributes<SVGSVGElement>>;

export default NewspaperTorn;
export { NewspaperTorn };
