import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperIsometricProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperIsometric: ForwardRefExoticComponent<NewspaperIsometricProps & RefAttributes<SVGSVGElement>>;

export default NewspaperIsometric;
export { NewspaperIsometric };
