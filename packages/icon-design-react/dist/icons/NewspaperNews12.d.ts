import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews12: ForwardRefExoticComponent<NewspaperNews12Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews12;
export { NewspaperNews12 };
