import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews32: ForwardRefExoticComponent<NewspaperNews32Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews32;
export { NewspaperNews32 };
