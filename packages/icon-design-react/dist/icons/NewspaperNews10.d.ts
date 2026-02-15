import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews10Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews10: ForwardRefExoticComponent<NewspaperNews10Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews10;
export { NewspaperNews10 };
