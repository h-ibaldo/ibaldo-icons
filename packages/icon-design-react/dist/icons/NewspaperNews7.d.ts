import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews7Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews7: ForwardRefExoticComponent<NewspaperNews7Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews7;
export { NewspaperNews7 };
